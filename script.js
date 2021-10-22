function name() {
  //get value from input field and save as "a"
  var a = document.getElementById("nameInput").value;
  //create LS key with value of "a"
  localStorage.setItem("uName",a);
  //automatically take user to two.html
  location.href = "two.html";
  }

functions functionTwo() {
  var b = localStorage.getItem("uName");
  document.getElementById("placeholder").innerHTML = "Hello" = b;


