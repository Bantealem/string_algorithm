let lengthOfLastWord = (s) =>{
    let count = 0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]==' '){
            if(count>0){
                return count;
            }
            continue;
        }
        count +=1;
    } 
    return count;

};


let s = "Hello World"
let result  = lengthOfLastWord(s);
console.log(result)