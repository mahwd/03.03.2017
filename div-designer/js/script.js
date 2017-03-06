var togg = document.getElementsByClassName('toggle');
var content = document.getElementsByClassName('toggle-item');


for (var i = 0; i < content.length; i++) {
  togg[i].onclick = function() {
    expand(this);
}
}

var c =  document.createElement('input');
function expand(i) {
  console.log(i.style.width);
  var nx  = i.nextElementSibling;
  if (nx.style.width == '0') {
    nx.style.width = 150+'px';
    c.style.width = '50px';
    var a = document.getElementById('colPick');
    a.appendChild(c);
  } else {
    i.style.width = '0';
  }
}
