function display(num){

    document.getElementById('result').value += num

    return num

}

function solution(){

    let a = document.getElementById('result').value

    let b = eval(a);

    document.getElementById('result').value = b

    return b

}
function clearScreen(){

    document.getElementById('result').value = ''

}