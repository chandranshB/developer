@echo off
echo =================================================
echo  Pushing Source Code to 'main'
echo =================================================
echo.

rem Ask for a commit message
set /p commit_message="Enter your commit message: "

rem Add, commit, and push source code
git add .
git commit -m "%commit_message%"
git push origin main

echo.
echo =================================================
echo  Deploying Site to 'gh-pages'
echo =================================================
echo.

rem Build and deploy to GitHub Pages
npm run deploy

echo.
echo =================================================
echo  All done!
echo =================================================
echo.
pause