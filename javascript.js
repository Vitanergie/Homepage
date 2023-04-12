console.log('It works!');

var clicks = 0;
function dreamFunction() {
    if (clicks == 0) {
        click1();
    } else if (clicks == 1) {
        click2();
    } else if (clicks == 2) {
        click3();
    } else if (clicks == 3) {
        click4();
    } else if (clicks == 4) {
        click5();
}
}

    //  document.click1();
function click1() {
    document.getElementById("dream").innerHTML = "Magic Happens!"
    clicks++;
    console.log(clicks);
}

function click2() {
    document.getElementById("dream").innerHTML = "Again"
    clicks++;
    console.log(clicks);
}

function click3() {
    document.getElementById("dream").innerHTML = "And again"
    clicks++;
    console.log(clicks);
}
function click4() {
    document.getElementById("dream").innerHTML = "For ever !"
    clicks++;
    console.log(clicks);
}
function click5() {
    document.getElementById("dream").innerHTML = "Just trust in yourself <3"
    clicks++;
    console.log(clicks);
}
