create table course
(
    uuid_course     text not null
        constraint course_pkey
            primary key,
    title       text,
    teacher     text,
    description text,
    topic       text,
    students jsonb,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
);


create table student
(
    uuid_student     text not null
        constraint student_pkey
            primary key,
    name       text,
    email     text,
    avatar    text,
    phone     text,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
);


ALTER TABLE course ADD COLUMN students jsonb;
ALTER TABLE student ADD COLUMN avatar text;
ALTER TABLE student ADD COLUMN phone text;





{ uuid_student: '46c01f89-c5a1-4a06-89ed-3c43e52a9544',
  name: 'Pedro',
  email: 'pedro@yopmail.com',
  created_at: null,
  updated_at: null }


SELECT * FROM student;


UPDATE course
SET students = jsonb_set(students, '{name}', '5', true)
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *

;

UPDATE course
SET students = jsonb_set(students, '{interests}', to_jsonb(array['Volleyball', 'Football', 'Swim']), true)
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *;


UPDATE course
SET students =  jsonb_set(students, '{interests}', '["Volleyball", "Football", "Swim"]'::jsonb, true)
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *

;

UPDATE course
SET students =  ('{"id":123}')
WHERE uuid_course = '49f23ec9-5532-4415-8928-07d4cb38178c' returning *



;
SELECT
jsonb_insert('{"name": "John","contact": {"phone": "555-5555"}}'::jsonb,'{contact, email}','"john@john.org"'::jsonb)

insert into mytable (myjson)
values ('{"id":123}')
returning (myjson ->> 'id');


insert into course (myjson)
values ('{"id":123}')
returning (myjson ->> 'id');
;

UPDATE course
SET students = COALESCE(students,'[]') || '["newString"]'
WHERE uuid_course='258a6464-b19b-4993-9575-1d06a8d3f349'


select * FROM course;


UPDATE course
SET students = null
WHERE 1=1;

SELECT * FROM student where uuid_student in ('46c01f89-c5a1-4a06-89ed-3c43e52a9544')
SELECT * FROM student





ALTER TABLE student ADD COLUMN avatar text;
ALTER TABLE student ADD COLUMN phone text;


SELECT to_tsvector('The quick brown fox jumped over the lazy dog')
    @@ to_tsquery('jumping');



SELECT * FROM student WHERE to_tsvector(name ||' '|| email) @@ to_tsquery('simpson | juanes');