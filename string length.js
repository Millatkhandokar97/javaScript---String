let str = 'how to manually count string length in javascript'
let result = 0

while(true){
    if(str.charAt(result) == ''){
        break
    }else{
        result++
    }
}
console.log(result)