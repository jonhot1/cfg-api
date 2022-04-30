// Sending and receiving data in JSON format using POST method
//
function loging(){
  var xhr = new XMLHttpRequest();
    var url = "https://cfg-api-ultimate.herokuapp.com/login";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
            var jsonResponse = xhr.responseJSON;
            var bitlyUrl = jsonResponse.results[url].shortUrl;
        }
    };
    var data = JSON.stringify({"person_email": document.getElementById('email').value, "person_password": document.getElementById('password').value});
    console.log("xhr.responseText")
    xhr.send(data);
    fetch(url)
        .then(function(response) {
            console.log(response.json())
            return response.json();
            
        })
        .then(function(jsonResponse) {

        });


}








