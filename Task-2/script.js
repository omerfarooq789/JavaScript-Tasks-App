var btn = document.getElementById("submit");
btn.onclick = function () {
    var x = Math.ceil(Math.random() * 10);
    var y = document.getElementById("num").value;
    if (x == y) {
        document.getElementById("display-output").innerHTML = "Good Work";
        document.getElementById("num").value = "";
    }
    else {
        document.getElementById("display-output").innerHTML = "Not Matched";
        document.getElementById("num").value = "";
    }
}