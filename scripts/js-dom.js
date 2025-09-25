//DOCUMENT-OBJECT MODEL

function welcome() {
    document.getElementById('thisheader').innerText = "Weclome to JavaScript DOM"
}

let ps = document.getElementsByClassName("example");
ps[1].style.color = "red";
ps[1].style.fontSize = "20px";


function addItem() {
    let get = document.getElementById("listitem").value;
    if (!get) {return;}
    let li = document.createElement("li");
    li.innerText = get;
    let ul = document.getElementById("custom-list");
    ul.appendChild(li);
    document.getElementById("listitem").value = "";
}

function removeItem() {
    let ul = document.getElementById("custom-list");
    let li = ul.lastElementChild;
    ul.removeChild(li);
}

function cheesify() {
    let ul = document.getElementById("custom-list");
    let cheese;
    for (listitem of ul.children) {
        cheese = document.createElement("li");
        cheese.innerText = "Cheese";
        ul.replaceChild(cheese, listitem);
    }
}

let incrementor = 0;
function doIncrement(direction) {
    if (direction > 0) {
        document.getElementById("outpt").innerText = ++incrementor;
    } else {
        document.getElementById("outpt").innerText = --incrementor;
    }
}

let k = 0;
function doalternate() {
    let switchytext = document.getElementById("alternatingtext");
    k = (++k % 3);
    if (k === 0) {
        switchytext.innerHTML = "<b>ONE</b>";
    } else if (k === 1) {
        switchytext.innerHTML = "<b>TWO</b>";
    } else {
        switchytext.innerHTML = "<b>THREE</b>";
    }
}