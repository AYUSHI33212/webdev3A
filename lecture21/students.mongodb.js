use("collegeDB");

// db.createCollection("students",)
// db.students.insertOne({
//   name: "John Doe",
//   age: 20,
//   major: "Computer Science"
// })

// db.students.insertMany([
//   {
//     name: "Alice Smith",
//     age: 22,
//     major: "Mathematics"
//   },
//   {
//     name: "Bob Johnson",
//     age: 21,
//     major: "Physics"
//   }
// ]);

// 

db.students.findOne(); //returns the first document in the collection
db.students.find(); //returns all documents in the collection       