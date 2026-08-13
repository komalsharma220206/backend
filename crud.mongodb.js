use("cruddb")
console.log("cruddb")
// db.createCollection("courses")
// db.courses.insertOne({
//     name:"komal",
//     price:"free",
//     course:"sigma web dev"
// })
// db.courses.insertMany([
//     {
//     name:"krishna",
//     price:"free",
//     course:"krishna web dev"
// },
//   {
//     name:"radha",
//     price:"free",
//     course:"radha web dev"
//   }
// ])
// let a=db.courses.find({price:"free"});
// console.log(a.toArray());
// let b=db.courses.findone({price:"free"});
//console.log(b);
// db.courses.updateOne({price:"free"},{$set:{price:100}})
// db.courses.updateMany({price:"free"},{$set:{price:100}})
// db.courses.deleteOne({course:"sigma web dev"});
db.courses.deleteMany({course:"sigma web dev"});