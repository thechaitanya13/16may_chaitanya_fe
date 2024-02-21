function percentage() {
    let a = parseInt(document.getElementById("v1").value);
    let b = parseInt(document.getElementById("v2").value);
    let c = parseInt(document.getElementById("v3").value);
    let d = parseInt(document.getElementById("v4").value);
    let e = parseInt(document.getElementById("v5").value);
    let f = parseInt(document.getElementById("v6").value);
    let g = parseInt(document.getElementById("v7").value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f) || isNaN(g)) {
        alert('You forget Enter valid marks any subject ');
    }
    else if (a > 50 || b > 50 || c > 50 || d > 50 || e > 50 || f > 50 || g > 50) {
        alert('Enter the valid marks of related Subject');
    }
    else {
        let total = (a + b + c + d + e + f + g);
        document.getElementById("total").innerHTML = (total);
        let percent = (total / 350) * 100;
        result = percent.toPrecision(4);
        document.getElementById("percent").innerHTML = result;
    }
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f) || isNaN(g)) {
        let remarks = document.getElementById('Remarks').innerHTML = ('');
    }
    else if (a < 18 || b < 18 || c < 18 || d < 18 || e < 18 || f < 18 || g < 18) {
        let remarks = document.getElementById('Remarks').innerHTML = ('Fail');
    }
    else {
        let remarks = document.getElementById('Remarks').innerHTML = ('Pass');
    }
}
