// const fs=require("fs")
// const fs=require ("fs/promises")
// // console.log(fs);
// console.log("starting");
// fs.writeFile("harry1.txt","code with harry is a good boy",()=>{
//     console.log("done")
//     fs.readFile("harry1.txt",(error,data)=>{
//         console.log(error,data.toString());
//     })
// });
// fs.writeFile("harry.txt","code with harry is a good boy",()=>{
//     console.log("done")
//     fs.readFile("harry.txt",(error,data)=>{
//         console.log(error,data.toString());
//     })
// });
// fs.appendFile("harry1.txt","harryrobo",(e,d)=>{
//     console.log(d);
// })
// console.log("ending");
import { readFile } from "fs"
import fs from "fs/promises"
let c= await fs.writeFile("harry.txt","this is an amazing promise")
let d=await fs.appendFile("harry.txt","\n\n compared to callback hell")
let a =await fs.readFile("harry.txt");
console.log(a.toString());
let b= await fs.readFile("harry1.txt");
console.log(b.toString());