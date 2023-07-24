let number0 = document.querySelector("#number0");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");
let number4 = document.querySelector("#number4");
let number5 = document.querySelector("#number5");
let number6 = document.querySelector("#number6");
let number7 = document.querySelector("#number7");
let number8 = document.querySelector("#number8");
let number9 = document.querySelector("#number9");

let stringBox = document.querySelector(".stringBox");
var string = '';

number0.addEventListener('click', function(){
    string += '0';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number1.addEventListener('click', function(){
    string += '1';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number2.addEventListener('click', function(){
    string += '2';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number3.addEventListener('click', function(){
    string += '3';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number4.addEventListener('click', function(){
    string += '4';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number5.addEventListener('click', function(){
    string += '5';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number6.addEventListener('click', function(){
    string += '6';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number7.addEventListener('click', function(){
    string += '7';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number8.addEventListener('click', function(){
    string += '8';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
number9.addEventListener('click', function(){
    string += '9';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});


// InPut Icon

let icon1 = document.querySelector("#icon1"); //cong
let icon2 = document.querySelector("#icon2"); //tru
let icon3 = document.querySelector("#icon3"); //nhan
let icon4 = document.querySelector("#icon4"); //chia
let icon0 = document.querySelector("#icon0"); //thap phan

icon1.addEventListener('click', function(){
    string += '+';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
icon2.addEventListener('click', function(){
    string += '&#8722;';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
icon3.addEventListener('click', function(){
    string += '&#215;';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
icon4.addEventListener('click', function(){
    string += '&#247;';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});
icon0.addEventListener('click', function(){
    string += '.';
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});

// Del Elements

let ac = document.querySelector("#iconAc");
let del = document.querySelector("#iconDel");

ac.addEventListener('click', function(){
    string = ''
    stringBox.innerHTML = 0;
    stringBox.style.justifyContent = 'right';
});
var take = '';
var cnt = 1;
del.addEventListener('click', function(){
        if (string[(string.length)-1] == ';') {
                if (string[(string.length)-2] == '5') {
                        cnt = 6;
                }
                else if (string[(string.length)-2] == '7') {
                        cnt = 6;
                }
                else if (string[(string.length)-2] == '2') {
                        cnt = 7;
                }
        }
        take = string.slice(0, -cnt);
        string = take;
        stringBox.innerHTML =
                string;
        cnt = 1;
        if (string == '') {
            stringBox.innerHTML = 0;
        }
        stringBox.style.justifyContent = 'right';
});

var iconAns = document.querySelector("#iconAns");

iconAns.addEventListener('click', function(){
    ans.toString();
    string += ans;
    stringBox.innerHTML = string;
    stringBox.style.justifyContent = 'right';
});

// Phan ket qua

let equal = document.querySelector("#iconEqual");
var temporary = '';
var array = [];
var ans = 0;

equal.addEventListener('click', function(){
    //chuyen sang dang tinh
    for (var i = 0; i < string.length ; i++) {
        if (string[i] == '.' || string[i] == '0' || string[i] == '1' || string[i] == '2' || string[i] == '3' || string[i] == '4' ||
        string[i] == '5' || string[i] == '6' || string[i] == '8' || string[i] == '9') {
            temporary += string[i];
        }
        else if (string[i] == '+' || string[i] == '&') {
            array.push(temporary);
            temporary = '';
            if (string[i] == '+') {
                temporary = '';
                array.push('+');
            }
            else if (string[i+5] == '2') {
                array.push('-');
                i += 6;
            }
            else if (string[i+4] == '5') {
                array.push('*');
                i += 5;
            }
            else if (string[i+4] == '7') {
                array.push('/');
                i += 5;
            }
            
        }

    }
    array.push(temporary);
    temporary = '';
    for (var i = 0; i < array.length ; i++) {
        temporary += array[i];
    }
    var end = (temporary.length) - 1;
    if (temporary[end] == '+' || temporary[end] == '-' || temporary[end] == '*' || temporary[end] == '/') {
        temporary = '';
    }
    string = eval(temporary);
    if (typeof string === "number"){
        ans = string;
    stringBox.innerHTML =  '= ' + string ;
        if ((string.toString()).length >= 12 ) {
        stringBox.style.justifyContent = 'left';
        }
    }
    else if (string == undefined) {
        stringBox.innerHTML = 'ERROR !';
    }
    string = '';
    temporary = '';
    array = [];
    
});

