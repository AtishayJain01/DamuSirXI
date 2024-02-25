var element = document.getElementById("top");
setInterval(function () {
  if (element.style.color == "white") {
    element.style.color = "black";
  } else {
    element.style.color = "white";
  }
}, 500);

var counter = 200;
setInterval(function () {
  counter -= 1;
  document.getElementById("counter").innerHTML = counter;
}, 1000);

ip_ad = "";
$(document).ready(() => {
  $.getJSON("https://api.ipify.org?format=json", function (data) {
    ip_ad = "YOUR IP ADDRESS IS : " + data.ip;
    document.getElementById("ip").innerHTML = ip_ad;
  });
});
