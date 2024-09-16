validValues = [...Array(25).keys()];

running = false;


function testFunc() {
    // alert("Button has been clicked!");
}

function reset() {
    running = false;
    document.getElementById("myThing").innerHTML = '<div id="pos-0" class="grid-item blue"></div>  <!--(1, 1)--><div id="pos-1" class="grid-item blue"></div>  <!--(1, 2)--><div id="pos-2" class="grid-item green"></div>  <!--(1, 3)--><div id="pos-3" class="grid-item blue"></div>  <!--(1, 4)--><div id="pos-4" class="grid-item blue"></div>  <!--(1, 5)--><div id="pos-5" class="grid-item blue"></div>  <!--2, 1)--><div id="pos-6" class="grid-item green"></div>  <!--(2, 2)--><div id="pos-7" class="grid-item yellow"></div>  <!--(2, 3)--><div id="pos-8" class="grid-item green"></div>  <!--(2, 4)--><div id="pos-9" class="grid-item blue"></div>  <!--(2, 5)--><div id="pos-10" class="grid-item green"></div>  <!--(3, 1)--><div id="pos-11" class="grid-item yellow"></div>  <!--(3, 2)--><div id="pos-12" class="grid-item red"></div>  <!--(3, 3)--><div id="pos-13" class="grid-item yellow"></div>  <!--(3, 4)--><div id="pos-14" class="grid-item green"></div>  <!--(3, 5)--><div id="pos-15" class="grid-item blue"></div>  <!--(4, 1)--><div id="pos-16" class="grid-item green"></div>  <!--(4, 2)--><div id="pos-17" class="grid-item yellow"></div>  <!--(4, 3)--><div id="pos-18" class="grid-item green"></div>  <!--(4, 4)--><div id="pos-19" class="grid-item blue"></div>  <!--(4, 5)--><div id="pos-20" class="grid-item blue"></div>  <!--(5, 1)--><div id="pos-21" class="grid-item blue"></div>  <!--(5, 2)--><div id="pos-22" class="grid-item green"></div>  <!--(5, 3)--><div id="pos-23" class="grid-item blue"></div>  <!--(5, 4)--><div id="pos-24" class="grid-item blue"></div>  <!--(5, 5)-->'
}

async function runGame(to) {
    running = true;
    let vals = validValues;
    shuffleArray(vals);
    for (let index = 0; index < vals.length-1; ++index) {
        if (!running) {return;}
        const element = vals[index];
        setGrey(element);
        await new Promise(r => setTimeout(r, to));
    }
}

function setGrey(x) {
    let ele = document.getElementById(`pos-${x}`);
    ele.innerHTML = `<div id="pos-${x}" class="grid-item grey"></div>`
}

function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}