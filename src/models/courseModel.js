const pool = require('../data/db')
const errorHandler = require('./errorHandler')

module.exports = {
    getCourses: async () => {
        console.log('course models')
        let courses = []
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM course')
            courses = rows
        } catch (error) {
            errorHandler(error)
        }
        return courses
    }
}