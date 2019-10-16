const pool = require('../data/db')
const errorHandler = require('./errorHandler')

module.exports = {
    getPeople: async () => {
        let students = []
        try {
            const client = await pool.connect()
            const { rows } = await client.query('SELECT * FROM student')
            students = rows
        } catch (error) {
            errorHandler(error)
        }
        return students
    }
}