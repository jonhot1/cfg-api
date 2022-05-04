

async function upDate(){
    var xhr = new XMLHttpRequest();
    var url = "https://cors-anywhere.herokuapp.com/https://cfg-api-ultimate.herokuapp.com/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"person_name": document.getElementById('inputName').value,
        "person_surname":  document.getElementById('inputSurname').value,
        "person_postal_code":  document.getElementById('inputPostalCode').value,
        "person_region":  document.getElementById('inputRegion').value,
        "person_country":  document.getElementById('inputCountry').value,
        "person_adress":  document.getElementById('inputAdress').value,
        "person_bio":  document.getElementById('inputBio').value,
        "person_surname":  document.getElementById('inputSurname').value});
    console.log(xhr.responseText)
    xhr.send(data);
}


async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users/1'

    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    return data

}


async function namemail(){
    const json = await getData()

    const email = document.getElementById('email');
    const name = document.getElementById('name');

    email.insertAdjacentHTML(
        'beforeend',
        '<span class="text-black-50"> '+json[0].person_email+'</code>',
    );

    name.insertAdjacentHTML(
        'beforeend',
        '<span class="font-weight-bold"> '+json[0].person_name+json[0].person_surname+'</code>',
    );

}

window.onload = async function() {
    await namemail()
    const json = await getData()
    document.getElementById("inputName").value= ""+json[0].person_name;
    document.getElementById("inputAdress").value= ""+json[0].person_adress;
    document.getElementById("inputCountry").value= ""+json[0].person_country;
    document.getElementById("inputPostalCode").value= ""+json[0].person_postal_code;
    document.getElementById("inputSurname").value= ""+json[0].person_surname;
    document.getElementById("inputRegion").value= ""+json[0].person_region;
    document.getElementById("inputBio").value= ""+json[0].person_bio;



    var a =foo()
    alert(""+foo())

}
