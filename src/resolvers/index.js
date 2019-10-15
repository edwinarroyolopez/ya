'use strict'

const { getCourses } = require('../models/courseModel')

//import courseModel from '../models/courseModel'

const queries = { 
    getCourses:  async () =>{
       return await getCourses()
    } 
}

module.exports = {
    Query: queries
}