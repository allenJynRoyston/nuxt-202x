## What am I?
⭐ A Nuxt boilerplate project for 2020.  Enhanced with built in support for PWA, GZip, unit testing and more.  

## Core technologies
- [Nuxt 2.x](https://nuxtjs.org/) 
- [Vue 2.x](https://vuejs.org/) 
- [Vuex 3.x](https://github.com/vuejs/vuex)
- [Jest](https://jestjs.io/)
- ES6/7 support (via Babel) 

## Install instructions:
```sh
$ git clone https://github.com/allenRoyston/nuxt-202x.git
$ cd nuxt-202x
$ npm install 
$ npm run dev
$ // open browser at http://localhost:1234
```

## Blog Automation:
To generate the links that the blog section will use, use the command:
```sh
$ npm run create:all
```
This will generate a JSON schema the Blog.vue component will utilize to automatically display your latest links.  It can be found in static/JSON.  If you wish to tweak the JSON structure, you can alter the code in node/buildBlog.js

## Unit testing
Make sure Jest is installed globally before running unit tests.
``` sh
$ npm install jest -g
$ npm run test
```

