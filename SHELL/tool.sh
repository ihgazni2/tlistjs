cat tlist.js | egrep function | sed -r "s/function (.*)\((.*)\) \{/\1/"

npm install jsdoc -g
jsdoc tlist.js -d docs

webpack

git subtree push --prefix=docs origin gh-pages

#how to bind a domain name 
# https://www.jianshu.com/p/a2b647f4c999


#how to mark jsdoc
#https://blog.csdn.net/flashzhy/article/details/84406740
