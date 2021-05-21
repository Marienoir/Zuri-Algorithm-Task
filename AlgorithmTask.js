// FIRST QUESTION
function convertFahrToCelcius(param){
    var result = param -32*5/9;
    var fixedResult = result.toFixed(4);
    if(typeof(param) === "number"){
        return(fixedResult)
    }
    else if(isNaN(Number(fixedResult)) || param == ""){
        return(`${JSON.stringify(param)} is not a valid number but a/an ${typeof(param)}`)
    }
    else if(typeof(param) === "string"){
        return(Number(fixedResult))        
    }
    else if(Array.isArray(param)){
        return(`${JSON.stringify(param)} is not a valid number but a/an array`)
    }
    else{
        return(`${JSON.stringify(param)} is not a valid number but a/an ${typeof(param)}`)
    }
}

console.log(convertFahrToCelcius(param));



// SEC0ND QUESTION
function checkYuGiOh(n){
    if(typeof(n) ==="number"){
        var result =[];
        for(let i= 1; i<= n; i++){
            if(i%2 == 0 && i%3== 0 && i%5== 0){
                result.push("yu-gi-oh")
            }
            else if(i%2 == 0 && i%5== 0){
                result.push("yu-oh")
            }
            else if(i%2 == 0 && i%3== 0){
                result.push("yu-gi")
            }
            else if(i%5 == 0){
                result.push("oh")
            }
            else if(i%3 == 0){
                result.push("gi")
            }
            else if(i%2 == 0){
                result.push("yu")
            }
            else{
                result.push(i)
            }
        }
    }
    else if(isNaN(Number(n)) || n == ""){
        return(`Invalid parameter: ${n}`)
    }
    else if(typeof(n) === "string"){
        n=Number(n);
        var result =[];
        for(let i= 1; i<= n; i++){
            if(i%2 == 0 && i%3== 0 && i%5== 0){
                result.push("yu-gi-oh")
            }
            else if(i%2 == 0 && i%5== 0){
                result.push("yu-oh")
            }
            else if(i%2 == 0 && i%3== 0){
                result.push("yu-gi")
            }
            else if(i%5 == 0){
                result.push("oh")
            }
            else if(i%3 == 0){
                result.push("gi")
            }
            else if(i%2 == 0){
                result.push("yu")
            }
            else{
                result.push(i)
            }
        }       
    }
    else{
        return(`Invalid parameter: ${n}`)
    }
  
    return(result);
    
}

console.log(checkYuGiOh(n));