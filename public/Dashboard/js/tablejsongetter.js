async function getData(){
    var targetUrl = 'https://cfgandshare-orvn6iw6ka-nw.a.run.app/users'


    const response = await fetch(targetUrl)
    const data = await response.json()
    console.log(data)
    return data

}