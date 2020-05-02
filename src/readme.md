this web-app was only a test app to learn programming with:
Node.js and react, this small project can be copied under
license CC-BY-4.0 - enjoy and have fun ever
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
title: first-react-app
purpose: learn react
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
.preparing (only onetime to begin)
- install Node.js and access to your filesystem
- start any shell (e.g. cmd.exe or powershell.exe)
- create local folder for your workspace
- optional create your own readme (same as like this e.g.)

**[1] installing**
. . . 

**[2] creating**
. . .

**[3] coding and testing**
- make some modifys in your codes or files
- testing with `npm run start`
. . . 

**[4] saving** (your work with git)
- install git into workspace (**attention: **only first use)
```
npm install -g git
git init
```
- config git
```
git config --list
git --help
```
a) look into root/.gitignore-file to see, which file and folders are ignored
b) see into config --list, which settings you must change

- look to status
```
git status
```
a) if you have 'red'-files in the list, see 5.1
b) if you have 'green'-files in the list, see 5.2.
c) if you have no files in the list, see 'your branch is up to date', see 5.3

- create your first commit
  ```
git status
git add .
git commit -m "[step]: description"
```

**[5] changing**
you have three steps into changing process
(1) untracked
- see with command: `git status` any file are 'red' - are new or changed
- next step is: you change more code or your do: `git add .` go to (2)

(2) staged
- see with command: `git status` any files are 'green' 
- add any new or modified files with command: `git add .` 
- next step is: you commit your work go to (3) or your work change more code
  then you go back to (1) and repeat the process

(3) commited
- with command: `git commit -m "[step]: description"` (create new branch in your repository)
- if call `git status` now, see 'your branch is up to date', now follow (6)

**[6] updating**
- after changing code or others make a new git commit with
  ```
git status
git add .
git commit -m "[step]: description"
```
- after commit optionally updating your repository into github
```
first push:
git push -u origin master
```
```, see
next push:
git push origin master
```

**[7] specials**
(1) make a clone from some projects
- clone any github-project
- create your own project from it

(2) make a fork to any projects
- clone any github-project
- work together wirh origin-author into a fork (3)

(3) make a update to a fork
- uodate your fork with: ...
. . .

++X. adds++
...

++Y.legend++
...

++Z.sources++
...

* * *

...
next release coming soon ...
[2020-04-26] - 01: start the project
[2020-04-28] - 02: testing git and github functions
...
[2020-05-02] - 0x: last release
***********************************************************
date:	2020-04-26
author:	cookroach88
mail:	rogercov@yahoo.de
site:	https://github.com/cookroach88
source:	[Node.js](https://nodejs.org/de/download/), [react](https://de.reactjs.org/)	
***********************************************************