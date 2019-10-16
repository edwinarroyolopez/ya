'use strict'

// import personModel from '../models/personModel'

const { getPeople } = require('../models/personModel')

module.exports = {
    /* queries */
    Query:{
        getPeople: async () =>{
            return await getPeople()
         } 
    }

}