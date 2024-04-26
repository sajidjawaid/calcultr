
let result = document.getElementById('result');

function insertvalue(value){
    result.value += value;
}

function clearresult(){
    result.value = '';
}

function deleteresult(){
    result.value = result.value.slice(0,-1)
}

function calculatevalue(){
    try{
        result.value = eval(result.value);
    }
    catch(moyemoye){
        result.value = "moyemoye";
    }
}