#!/bin/bash
# required dependencies: aws-cli, git, node, yarn

# Browse to base/main folder.
cd ../../

# Checkout "master" branch
git fetch
git checkout master
git pull

# Install dependencies
yarn install

# Build website
yarn deploy

# Upload to S3
aws s3 sync public/ s3://www.joeplaa.com --delete --profile joeplaa.com

# Invalidate CloudFront cache
#aws cloudfront create-invalidation --distribution-id E3JKSWPJUXDHOM --paths "/*"  --profile joeplaa.com