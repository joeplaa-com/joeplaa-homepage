#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to base/main folder.
cd ../../

# Checkout "develop" branch
git fetch
git checkout refactor-to-next-js
git pull

# Set correct environment variables
mv .env.production .env.production.backup
cp .env.test .env.production

# Install dependencies
yarn install

# Build website
yarn deploy

# Publish website to Nginx
# Make sure you have the private key `jpl-nginx` stored in your user folder: `~/.ssh/jpl-nginx`.
rsync -ahzO --delete --dirs -e "ssh -i ~/.ssh/jpl-nginx" out/ joeplaa@jpl-nginx:/var/www/test-www-joeplaa-com
ssh -t jpl-nginx 'sudo chown www-data:www-data -R /var/www/test-www-joeplaa-com'

# Restore environment variables
mv .env.production.backup .env.production