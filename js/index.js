document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();

function myFunction() {
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = n;
}
