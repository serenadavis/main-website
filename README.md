# Harvard Advocate Website

## Overview

Our website is built using [GatsbyJS](https://www.gatsbyjs.org/), which is a tool for generating static [ReactJS](https://reactjs.org/) sites.

All of the articles are stored as Markdown files in the [content folder](https://github.com/harvardadvocate/main-website/tree/master/src/pages/content) in the repo.

All images are stored in our S3 bucket named `theharvardadvocate`.

## Getting started

### Install the AWS Cli

`brew install awscli`

If you have problems check [this](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-tool-pip) page.

Ask us for an Access Key and a Secret Key. Once you have them run:

`aws configure`

on your terminal and follow the prompts to type them in. The region is `us-east-1`.


### Install the Gatsby Cli

Check if you have NodeJS installed:
`which node`

If there is no output, you can install NodeJS [directly](https://nodejs.org/en/) or via a version manager like [nvm](https://github.com/nvm-sh/nvm).

`npm install -g gatsby-cli`

### Fork this repository and then clone your fork:

`git clone https://github.com/<your-github-name>/main-website.git`

### Move to the cloned directory

`cd main-website`

### Build the site

`GATSBY_CONCURRENT_DOWNLOAD=20 gatsby develop`

This command may take a while the first time you run it. If it fails try running it again.

### Click [here](http://localhost:8000) to open the site once the build completes

### If you see the website working properly then you are good to go!
