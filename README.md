# joeplaa.com homepage

## Framework

folder: joeplaa.com
url: joeplaa.com, [www.joeplaa.com](https://www.joeplaa.com)
framework: [Next.js v9.x](https://nextjs.org/docs/getting-started)

## Site development

### Install dependencies: node, yarn, git

1. `sudo apt update && sudo apt upgrade`
2. `sudo apt-get install curl gnupg build-essential`
3. `curl -sL https://deb.nodesource.com/setup_12.x | bash - && curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list`
4. `apt-get update && apt-get install nodejs yarn git`

### Clone repo

1. Add SSH key to bitbucket: [https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html)
2. Browse to development: `cd github`
3. Clone repo: `git clone git@github.com:joeplaa/joeplaa.com.git`

### Build

1. Browse to project folder: `cd joeplaa.com`
2. Install dependencies: `yarn install`

### Run

1. Browse to folder website: `cd joeplaa.com`
2. Start server: `yarn next dev`
3. Browse to `localhost:3000` or `<ip-address-dev>:3000`
