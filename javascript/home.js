let div = document.getElementById("welcome");

function autoPrint(string, color, time) {
    let span = document.createElement("span");
    span.style.color = color;
    div.appendChild(span);
    
    for(let i = -1; i < string.length;){
        let x = setTimeout(function(){
            span.appendChild(document.createTextNode(string[i]))
        }, time);
    
        i++;
        time+=300;
        if(i == string.length){
            clearInterval(x);
        }
    }
}


autoPrint("String ", "#F75869",300);
autoPrint("str ", "#9BABEE ",2200);
autoPrint("= ", "white",3000);
autoPrint('"',"white",3200);
autoPrint("Welcome to AUKNOTES!", "#37C426 ",3500);
autoPrint('"', "white",3600);
autoPrint(";", "#F75869",3800);

/*
let csis330 = document.getElementById("csis330");
csis330.onclick = function(){
    window.location.href = "courses/csis330.php";
}
*/



