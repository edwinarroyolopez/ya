'use strict'

require('dotenv').config() /* create my environments vars */

const express = require('express')

const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')

const { readFileSync } = require('fs')
const { join } = require('path')

const app = express()
const port = process.env.port || 3000

const resolvers = require('./src/resolvers')
const { typeDefs } = require('./src/typeDefs/')

const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  }))
  

app.listen(port, () => {
    console.log(`Server is listening  at http://localhost:${port}/api`)
})

