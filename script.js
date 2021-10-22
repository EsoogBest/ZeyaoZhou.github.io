function userName() {
  //get value from input field and save as "a"
  var a = document.getElementById("input").value;
  //create LS key with value of "a"
  localStorage.setItem("uName",a);
  //automatically take user to two.html
  location.href = "two.html";
  }

function functionTwo() {
  var b = localStorage.getItem("uName");
  document.getElementById("placeholder").innerHTML = "Hello" = b;


