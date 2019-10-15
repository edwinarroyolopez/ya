## BASES

# construction
1. npm init -y
2. npm i express express-graphql graphql graphql-tag graphql-tools cors pg dotenv --save
3. npm i nodemon standard -D  
4. npm install @babel/core @babel/node --save-dev
5. .babelrc


-- modular

** 
https://www.pika.dev/npm/@jokio/merge-graphql-schemas

** estructures
https://github.com/betaflag/graphql-server-scaffolding

** graphql modules
https://medium.com/the-guild/graphql-modules-feature-based-graphql-modules-at-scale-2d7b2b0da6da

** require babel for make "import"
https://www.npmjs.com/package/merge-graphql-schemas

** but not include resolvers only types
https://medium.com/@choudlet/how-to-combine-graphql-type-definitions-quickly-and-easily-with-apollo-server-c96c4d9a7ea1

** interesting
https://www.apollographql.com/docs/graphql-tools/generate-schema/


## BABEL CONFIGURATION

1. npm install babel-cli babel-preset-env babel-loader babel-core --save-dev
2. npm install nodemon --save-dev
3. "scripts": {
    "start": "nodemon index.js --exec babel-node --presets babel-preset-env",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  
# source: 
https://medium.com/developer-circles-lusaka/how-to-setup-express-js-server-with-nodemon-and-babel-c3a17218c282