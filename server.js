

require('dotenv').config() /* create my environments vars */

const express = require('express')

const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')


const app = express()
const port = process.env.port || 3000

//const resolvers = require('./src/resolvers')
import resolvers from './src/resolvers'
import  typeDefs  from './src/typeDefs/'

const schema =   makeExecutableSchema({
   typeDefs, 
   resolvers,
  /* resolverValidationOptions :{
    requireResolversForResolveType: false
  } */
})

console.log('after... makeExecutableSchema')

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  }))
  

app.listen(port, () => {
    console.log(`Server is listening  at http://localhost:${port}/api`)
})

