'use strict'

// import personModel from '../models/personModel'

const { 
    getPeople,
    searchItems 
} = require('../models/personModel')

module.exports = {
    /* queries */
    Query:{
        getPeople: async () =>{
            return await getPeople()
         },
         searchItems: async (root ,keywords) =>{
            return await searchItems(root, keywords)
         } 
    }

}