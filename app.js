function getNumber(num){
    var digits = document.getElementById('digits'); 
    digits.value += num;
}
function clearValue(){
    var digits = document.getElementById('digits'); 
    digits.value = " ";
    var result = document.getElementById('result');
    result.value = " ";

}
function equalTo(){
    var digits = document.getElementById('digits'); 
    var result = document.getElementById('result');
    result.value = eval(digits.value);  
}
function removeIt(){
    var digits = document.getElementById('digits').value; 
    document.getElementById('digits').value  = digits.substr(0, digits.length - 1);
}
function pm(){
    var digits = document.getElementById('digits').value;
    var result = document.getElementById('result')
    var n = digits;
    n = n* -1;
    digits = n;
    result.value = digits;
}