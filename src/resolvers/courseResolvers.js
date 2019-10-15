'use strict'

const { getCourses } = require('../models/courseModel')

const queries = { 
    getCourses:  async () =>{
       return await getCourses()
    } 
}

export default {
    Query: queries
}