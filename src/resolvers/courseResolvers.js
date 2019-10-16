'use strict'

const { getCourses } = require('../models/courseModel')

module.exports = {
    /* queries */
    Query: {
        getCourses:  async () =>{
            return await getCourses()
         } 
    }
}