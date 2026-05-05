#!/bin/bash
# Usage: bash push.sh YOUR_GITHUB_TOKEN
if [ -z "$1" ]; then
  echo "Usage: bash push.sh YOUR_GITHUB_TOKEN"
  exit 1
fi
git remote set-url origin "https://$1@github.com/roeybi/skyaman1-landing-page.git"
git push origin main --force
git remote set-url origin "https://github.com/roeybi/skyaman1-landing-page.git"
echo "Done! GitHub Actions will deploy your site in ~2 minutes."
