use("collegeDB")
// db.students2.insertMany([
//      {
//          id: 1,                     
//          name: "Rohit",
//          course: "BTech CSE",
//          fees: 10000,
//          age: 18,
//          marks: 90,
//          gender: "male", 
//          rollno: 101,
//          city:"gurugram"
//      },
//      {
//          id:2,
//          name:"kajal",
//          course:"BSE",
//          fees:"20000",
//          marks: 80,
//          age:19,
//          gender:"female",
//          rollno:102,
//          city:"gurugram"


//      }
//  ])
db.students2.arrgregate([
    {
        $match:{course:"Btech"}
    },
    {
        $project:{name:1,marks:80,semester:1,course:BtechCSE}
    },
    {
        $group:{_id:"$semester",totalMarks:{$sum:"$marks"},
        avgMarks:{$avg:"$marks"},
        maxMarks:{$max:"$marks"},
        minmarks:{$min:"$marks"}
    },
}
])

      
