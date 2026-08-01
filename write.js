let arr=["cornflowerblue","hotpink","plum","pink"]
const func=()=>{
    if(Math.random()<0.25){
    document.body.style.backgroundColor=arr[0];
}
else if(Math.random()<0.50){
    document.body.style.backgroundColor=arr[1];
}
else if(Math.random()<0.75){
    document.body.style.backgroundColor=arr[2];
}
else if(Math.random()<1){
    document.body.style.backgroundColor=arr[3];
}
}
setInterval(func,1000);