
var feedContainer = document.getElementById("feed");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://sreelakshmi.me/tweet/sample.json');
  myRequest.onload = function() {
    if (myRequest.status >= 200 && myRequest.status < 400) {
      alert("sucess");
      var myData = JSON.parse(myRequest.responseText);
    //  renderHTML(myData);

    } else {
      alert("We connected to the server, but it returned an error.");
    }

  };

  myRequest.onerror = function() {
    alert("Connection error");
  };

  myRequest.send();

});
