var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var a=0;
stop();




function stop() {
k = setInterval(function() {
  if (a < 10) {
  var b = 10-(a);
  console.log(b);
  if (b<10) {
              document.getElementById('timer').innerHTML = "00:0"+ b;
            } else {
                      document.getElementById('timer').innerHTML = "00:"+ b;
                    }
  red.style.background = 'rgba(252, 3, 48, 0.93)';
  yellow.style.background = 'rgba(91, 90, 90, 0.78)';
  green.style.background = 'rgba(91, 90, 90, 0.78)';
  a++;
              } else {
                  a=0;
                  clearInterval(k);
                  wait();
                      }
                            },1000);
                }

function wait() {
m = setInterval(function() {
  if (a < 5) {
    var b = 5-(a);
    console.log(b);
    if (b<10) {
                document.getElementById('timer').innerHTML = "00:0"+ b;
              } else {
                        document.getElementById('timer').innerHTML = "00:"+ b;
                      }
      a++;
    red.style.background = 'rgba(91, 90, 90, 0.78)';
    yellow.style.background = 'rgba(223, 250, 4, 0.91)';
    green.style.background = 'rgba(91, 90, 90, 0.78)';
  } else {
    a=0;
    clearInterval(m);
    go();
  }
},1000);
}

function go() {
  n = setInterval(function() {
  if (a < 10) {
    var b = 10-(a);
    console.log(b);
    if (b<10) {
                document.getElementById('timer').innerHTML = "00:0"+ b;
              } else {
                        document.getElementById('timer').innerHTML = "00:"+ b;
                      }
    a++;
    yellow.style.background = 'rgba(91, 90, 90, 0.78)';
    red.style.background = 'rgba(91, 90, 90, 0.78)';
    green.style.background = 'rgba(4, 130, 13, 0.87)';
              } else {
                    a=0;
                    clearInterval(n);
                    stop();
                      }
          },1000);
        }
