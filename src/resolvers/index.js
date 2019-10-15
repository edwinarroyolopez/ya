'use strict'

import courseModel from '../models/courseModel'

const queries = { 
    getCourses:  async () =>{
       return await courseModel.getCourses()
    } 
}

module.exports = {
    Query: queries
}