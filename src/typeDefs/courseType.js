export default  `
type Course {
    uuid_course: ID!
    title: String!
    teacher: String
    description: String!
    topic: String @deprecated
}

type Query {
    "Return all courses"
    getCourses: [Course]
    "Return a course"
    getCourse(uuid_course: ID!): Course
}
`