use("collegeDB");

// db.createCollection("students")
// db.createCollection("students2")    
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

// db.students2.insertMany([
//   {
//     name: "Alice Smith",
//     age: 22,
//     major: "Mathematics",
//     semester: 4,    
//     course: "Calculus"  
//   },
//   {
//     name: "Bob Johnson",
//     age: 21,
//     major: "Physics",
//     semester: 3,
//     course: "btech"
//   }
// ]);
//    db.students2.insertMany([
//     {name: "Alice Smith", age: 22, major: "Mathematics", semester: 4, course: "Calculus", marks: 85},
//     {name: "Bob Johnson", age: 21, major: "Physics", semester: 3, course: "btech", marks: 90},
//     {name: "Charlie Brown", age: 23, major: "Chemistry", semester: 3, course: "btech", marks: 75},
//     {name: "David Wilson", age: 20, major: "Biology", semester: 2, course: "btech", marks: 80},
//     {name: "Eva Davis", age: 22, major: "Computer Science", semester: 3, course: "btech", marks: 95}
//   ]);   


    
// db.students.findOne(); //returns the first document in the collection
// db.students.find(); //returns all documents in the collection       

// db.students2.find({},{name:1,semester:1,course:1,_id:0})
// db.students2.find().skip(3).limit(1) //skip use to skip the first 3 documents and limit to return only 1 document  /
///student find where semester is 3 and course is btech sort des by his marks and list it to 2 with skipping one value
// db.students2.find({semester:3,course:"btech"}).sort({marks:-1}).skip(1).limit(2) 
 