var novruzCountDown = new Date("Mar 20, 2017 00:00:00").getTime();
// saymaq istediyimmiz tarix
var k = setInterval(function() {
  // Bu gunun tarixi
  var now = new Date().getTime();
  // bugunnen ferq
  var diff = novruzCountDown - now;
  console.log(now);
  // gun saat deq saniye ucun hesablamalar
  var day = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = day + ' gün ' + hour + ' saat ' + min + ' dəqiqə ' + sec +  ' saniyə qalıb ' ;
  if (diff <= 0) {
    clearInterval(k);
    document.getElementById("timer").innerHTML = "Bayramınız mübarək";
  }
}, 1000);
