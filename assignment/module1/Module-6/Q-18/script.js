let inp = document.getElementById('a');
let but = document.getElementById('b');
let bd =document.querySelector('body');

but.addEventListener('click', function () {
    if(inp.value == ""){
        alert('Enter password');
    }
   else if (inp.type == "password") {
        inp.type = "text";
        inp.style.background ='orange';
        inp.style.border ='2px  dotted';
        bd.style.background ='pink'
    }
    else {
        inp.type = "password";
        inp.style.background ='#FCE77E';
        inp.style.border = '1px solid black'
        bd.style.background ='#FCE77E'
        
    }
});