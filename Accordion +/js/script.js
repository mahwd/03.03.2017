var cont = document.getElementById('container');
var menu = document.getElementsByClassName('icon')
var panel = document.getElementsByClassName('panel');
var k=1;
for (var i = 0; i < menu.length; i++) {
  panel[i].style.overflow = "hidden";
  panel[i].style.height = "0px";
  menu[i].onclick = function() {
    var nxt = this.nextElementSibling;
    addtxt(nxt);
  }
}

function addtxt(param){
  if (k===1) {
    param.style.height = '100px' ;
    param.style.padding = '5px';
    // param.style.border = '1px solid rgb(76, 19, 120)';
    k=0;
    } else {
    param.style.height = '0';
    k=1;
  }
}
