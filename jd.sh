git rm -r docs
jsdoc tlist.js -d docs
webpack
node TOOLS/npmver.js
git add .
git commit -m "docs"
npm publish
