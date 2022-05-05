
const citymap = {
    lisboa: {
        center: { lat: 38.736946, lng: -9.142685 },
        population: 504718,
    },
    Porto: {
        center: { lat: 41.15, lng: -8.61024 },
        population: 214349,
    },
};


async function initMap() {
    const json = await getData()
    console.log(json[0].st_x)
    console.log(typeof json[0].st_x)
    var myLatlng = new google.maps.LatLng(parseFloat(json[0].st_x), parseFloat(json[0].st_y));

    var mapOptions = {
        zoom: 13,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    for (let i = 0; i < json.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].st_x), parseFloat(json[i].st_y)),
            title:"Hello World!"
        });

        marker.setMap(map);
    }

}

window.initMap = initMap;


async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/stores'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/stores'


    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    console.log(data)
    return data

}

