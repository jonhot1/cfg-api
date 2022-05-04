// Sending and receiving data in JSON format using POST method
//
function loging(){
    var xhr = new XMLHttpRequest();
    var url = "https://cfgandshare-api.herokuapp.com/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"person_email": document.getElementById('email').value, "person_password":  document.getElementById('password').value});
    console.log(xhr.responseText)
    var results = xhr.send(data);
    alert(""+results)
}






