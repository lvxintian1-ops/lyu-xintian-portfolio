#!/bin/bash
# Build the site and deploy dist/ to the gh-pages branch of a GitHub repo.
# Usage: ./deploy.sh <github-username> <repo-name>
set -e

if [ $# -lt 2 ]; then
  echo "Usage: ./deploy.sh <github-username> <repo-name>"
  exit 1
fi

USER_NAME="$1"
REPO="$2"

cd "$(dirname "$0")"
npm run build

cd dist
rm -rf .git
git init -q
git add -A
git commit -q -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"
git branch -M gh-pages
git remote add origin "git@github.com:${USER_NAME}/${REPO}.git"
git push -f origin gh-pages

echo ""
echo "✅ Pushed to gh-pages. Now enable Pages:"
echo "   https://github.com/${USER_NAME}/${REPO}/settings/pages"
echo "   Source: Deploy from a branch → gh-pages → / (root)"
echo "   Site will be live at: https://${USER_NAME}.github.io/${REPO}/"
