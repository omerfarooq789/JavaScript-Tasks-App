let btn = document.querySelector("#btn");
btn.onclick = () =>{
    document.querySelector("#display-output").innerHTML = `Your Current URL is : <br> ${document.URL}`;
}