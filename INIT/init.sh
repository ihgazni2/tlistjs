#!/bin/sh

scheme="https"
git init
if [ $scheme = "https" ];then
    git remote add origin https://github.com/navegador5/tlistjs.git
    git remote add origin-git git@github.com:navegador5/tlistjs.git
    git remote add origin-https https://github.com:navegador5/tlistjs.git
fi

if [ $scheme = "git" ];then
    eval `ssh-agent`
    ssh-add
    git remote add origin git@github.com:navegador5/tlistjs.git
    git remote add origin-git git@github.com:navegador5/tlistjs.git
    git remote add origin-https https://github.com/navegador5/tlistjs.git
fi

git config --local user.name navegador5
git config --local user.email 
git remote -v
git pull origin master
git add .
git commit -m "first commit"
git push origin master

