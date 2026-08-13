use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "C",
    "author": "krishna sharma",
    "teacher": "harry bhai"
  },
  {
    "name": "javascript",
    "author": "harry sharma",
    "teacher": "harry bhai"
  },
  {
    "name": "java",
    "author": "ayush sharma",
    "teacher": "harry bhai"
  },
  {
    "name": "c++",
    "author": "indra sharma",
    "teacher": "harry bhai"
  },
  {
    "name": "nodejs",
    "author": "sundari sharma",
    "teacher": "harry bhai"
  }
]);
console.log("done inserting data");