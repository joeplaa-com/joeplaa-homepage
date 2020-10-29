# Readme

## 1 Project description

The aim of this project is to build a fast staticly hosted, client-side website with a blog, portfolio and a landing page. It should get a near perfect [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) score to have the best chance of ranking high in the Google search results. This is achieved by building the site in [Gatsby.js](https://www.gatsbyjs.com/).

![lighthouse score joeplaa.com](/content/lighthouse-20201029.png)

### 1.1 Main libraries

* [Gatsby.js](https://www.gatsbyjs.com/): "Gatsby is a React-based open source framework for creating websites and apps."
* [MDX](https://mdxjs.com/): "MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents." Used to write our articles (blog, portfolio, conditions).

### 1.2 Styling

* [Reactstrap](https://reactstrap.github.io/): "Easy to use React Bootstrap 4 components". To make styling the website a piece of cake.
* [SASS](https://sass-lang.com/): We use SASS, SCSS to be precise, to compile our own CSS file. This makes customizing the default [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/theming/#sass) values a breeze.

### 1.3 Optimization

* [gatsby-plugin-advanced-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/): To generate a sitemap to be read by search engines.
* [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/): To guide crawlers and search engines to your sitemap.
* [react-helmet](https://github.com/nfl/react-helmet) and [react-seo-component](https://github.com/spences10/react-seo-component): To help us with our SEO.
* [Preact](https://preactjs.com/): To minimize our React bundle size after compiling our website.
* [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) and [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/): Image optimization; webp, srcsets, "blur up" effect and lazy loading.

### 1.4 Development

* [ESLint](https://eslint.org/): To help us find problems in our code quickly.
* [Jest](https://jestjs.io/): For unit testing our code. (To come)
* [Typescript](https://www.typescriptlang.org/): Makes it so much easier to spot errors in your JavaScript code.

### 1.5 Sources

This website would not have been possible without other peoples help. These are some of the sources I used to understand and build this site:

* [How to Build Your Coding Blog From Scratch Using Gatsby and MDX](https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/)
* [How to Use Images in Gatsby](https://www.labnol.org/code/gatsby-images-200607)
* [How to create page with parameters in gatsbyJS dynamically?](https://stackoverflow.com/questions/61967988/how-to-create-page-with-parameters-in-gatsbyjs-dynamically)
* [Building a serverless contact form with AWS Lambda and AWS SES](https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0)

## 2. Development

* Clone repository:

  ```console
  git clone https://github.com/joeplaa-com/joeplaa.com.git
  ```

* Install packages:

  ```console
  yarn install
  ```

  or

    ```console
   npm install
  ```

* Open and update package.json:
  * Change name and settings:

    ```json
    "name": "joeplaa.com",
    "version": "0.2.2",
    "description": "joeplaa.com homepage",
    "main": "index",
    "repository": "git@github.com:joeplaa/joeplaa.com.git",
    "author": "Joep van de Laarschot <joep@joeplaa.com>",
    "license": "MIT",
    "private": false,
    ```

  * Change [browser compatibility](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D) to your needs:

    ```json
    "browserslist": [
        ">0.25%",
        "not dead"
    ],
    ```

* Run development:

  ```console
  yarn dev
  ```

* Open browser and browse to [localhost:8000](http://localhost:8000).

## 3. Deployment



### 3.1 Nginx

### 3.2 AWS