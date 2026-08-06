const fs=require("fs");
console.log("file is creating");
fs.writeFile("komal.txt","komal is krishna's servant",()=>{
    console.log("done making file");
});
console.log("file has created");

fs.appendFile("komal.txt"," also radharani's servant",(error)=>{
    if(error){
        console.log("error");
        return;
    }
    fs.readFile("komal.txt",(error,data)=>{
    console.log(data.toString())
})
})
