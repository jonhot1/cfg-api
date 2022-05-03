
async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'

    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    return data

}

window.onload = async function() {

    const json = await getData()
    console.log(json[0])
    var table = document.getElementById("UsersTable");
    for (let i = 0; i < json.length; i++) {
        var row = table.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "" + json[i].person_name
        cell2.innerHTML = "mail"+ json[i].person_email
        cell3.innerHTML = "" + json[i].person_bio
        cell4.innerHTML +="<td class=\"text-right\"><button type=\"button\" class=\"btn btn-danger\">Delete</button></td>"



    }
}