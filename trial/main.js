
var feedContainer = document.getElementById("feed");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://api.jsonbin.io/b/5ef8bc0ebb5fbb1d25604f9b');
  myRequest.onload = function() {
    if (myRequest.status >= 200 && myRequest.status < 400) {
      alert("sucess");
      var myData = JSON.parse(myRequest.responseText);
    //  renderHTML(myData);

    } else {
      alert("We connected to the server, but it returned an error." + myRequest.statusCode);
      
    }

  };

  myRequest.onerror = function() {
    alert("Connection error");
  };

  myRequest.send();

});
