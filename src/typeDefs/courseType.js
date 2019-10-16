export default  `
"Validate the level kinds"
enum Level {
    beginner
    intermediate
    advanced
}

union GlobalSearch = Course | Student | Monitor

type Course {
    uuid_course: ID!
    title: String!
    teacher: String
    description: String!
    topic: String @deprecated
    students: [Person]
    level: Level
}

type Query {
    "Return all courses"
    getCourses: [Course]
    "Return a course"
    getCourse(uuid_course: ID!): Course
}
`