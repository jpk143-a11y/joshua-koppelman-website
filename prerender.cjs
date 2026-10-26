// Build static page content from the shared templates. No third-party packages.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const root=path.join(__dirname,'dist');
fs.mkdirSync(root,{recursive:true});
fs.cpSync(path.join(__dirname,'public'),root,{recursive:true});
const site=JSON.parse(fs.readFileSync(path.join(__dirname,'content/site.json'),'utf8'));
if(!site.copy||Object.values(site.copy).some(value=>typeof value!=='string'))throw new Error('Site copy must contain text values.');
const code=fs.readFileSync(path.join(__dirname,'src/app.js'),'utf8').replace('__SITE_COPY__',JSON.stringify(site.copy)).replace('__SITE_PHOTOS__',JSON.stringify(site.photoSources||{}));
const styles=fs.readFileSync(path.join(__dirname,'src/styles.css'),'utf8');
fs.writeFileSync(path.join(root,'app.js'),code);
fs.writeFileSync(path.join(root,'styles.css'),styles);
fs.writeFileSync(path.join(root,'.nojekyll'),'');
const assetVersion=crypto.createHash('sha256').update(code+styles).digest('hex').slice(0,10);
const pages={index:'Home','my-story':'My Story',experience:'Experience',projects:'Projects',beyond:'Beyond the Résumé',resume:'Résumé',connect:'Connect'};
for(const [page,title] of Object.entries(pages)){
 let html='';
 const stub=()=>({setAttribute(){},classList:{toggle(){},add(){}},addEventListener(){}});
 const app={set innerHTML(value){html=value}};
 const document={body:{dataset:{page},classList:{toggle(){},add(){}}},getElementById(id){return id==='app'?app:id==='resume-upload'?null:stub()},querySelector(){return stub()},querySelectorAll(){return []}};
 vm.runInNewContext(code,{document,localStorage:{getItem(){return null}},console},{timeout:3000});
 if(!html.includes('<h1>')||!html.includes('<main'))throw new Error('Static rendering failed for '+page);
 // Optional web fonts enhance typography without holding up page rendering.
 const fonts='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap';
 fs.writeFileSync(path.join(root,page+'.html'),`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} — Joshua Koppelman</title><meta name="description" content="Joshua Koppelman — restaurants, consumer brands, business, and a life of passion and challenge."><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#153e73"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="styles.css?v=${assetVersion}"><link rel="stylesheet" href="${fonts}" media="print" onload="this.media='all'"><script src="app.js?v=${assetVersion}" defer></script></head><body data-page="${page}"><div id="app">${html}</div></body></html>`);
 console.log('Rendered '+page+'.html');
}

// Commit this output so GitHub Pages can publish main /docs without credentials.
const pagesRoot=path.join(__dirname,"docs");
fs.mkdirSync(pagesRoot,{recursive:true});
fs.cpSync(root,pagesRoot,{recursive:true});
console.log("Updated docs/ for GitHub Pages");
