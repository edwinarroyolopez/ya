'use strict'

import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import courseResolvers from './courseResolvers'
import personResolvers from './personResolvers'

import path from 'path';

const resolvers = [
    courseResolvers,
    personResolvers
]

const resolversArray = fileLoader(path.join(__dirname, './'));


export default mergeResolvers(resolversArray)


/*
import courseModel from '../models/courseModel'
import personModel from '../models/personModel'

const queries = { 
    getCourses:  async () =>{
       return await courseModel.getCourses()
    },
    getPeople:  async () =>{
        return await personModel.getPeople()
     }

}

module.exports = {
    Query: queries
}

*/

