var btn = document.getElementById("submit");
btn.onclick = () => {
    var c = document.getElementById("celsius").value;
    var f = document.getElementById("fahrenheit").value;
    var cToF = ((c / 5) * 9) + 32;
    var fToC = ((f - 32) / 9) * 5;
    document.getElementById("display-output").innerHTML = `${c}&#176C is ${cToF}&#176F <br> ${f}&#176F is ${fToC}&#176C`;
}