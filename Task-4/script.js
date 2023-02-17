var a = 5;
var b = 6;
var c = 7;
var s = (a + b + c)/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
document.getElementById("display-output").innerHTML= `So, The Area of a Triangle with sides 5, 6 and 7 is : ${area}`;