'use strict'

import { mergeTypes } from 'merge-graphql-schemas';
import courseType from './courseType'
import personType from './personType'

const typeDefs = [
    courseType,
    personType,
  ];

  
export default mergeTypes(typeDefs);

