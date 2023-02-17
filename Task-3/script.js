var btn = document.getElementById("submit");
btn.onclick = function () {
    var y = document.getElementById("num").value;
    if (y < 13) {
        document.getElementById("display-output").innerHTML = `Difference between 13 and The given number ${y} is : ${(13 - y)}`;
        document.getElementById("num").value = "";
    }
    else {
        document.getElementById("display-output").innerHTML = `The given number  ${y} is bigger than 13 so double the absoulte difference is : ${(y - 13) * 2}`;
        document.getElementById("num").value = "";
    }
}