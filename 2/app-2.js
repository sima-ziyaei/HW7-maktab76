function recurIndex(str){
    let arr=[];
    for(let i=0; i<str.length; i++){
        if(arr.indexOf(str[i])== -1){
            arr.push(str[i]);
        }else {
            console.log(`{"${str[i]}":[${str.indexOf(str[i])},${i}]}`);
            break;
        }
        if(i === str.length-1){
            console.log("{}");
        }
    }
    if(!str){
        console.log("{}");
    }
}
recurIndex("AREDCBSDERD");
