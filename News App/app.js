/*var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.jw.org/en/', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()*/
fetch('https://www.jw.org/en/')
.then(res => {
    console.log(res)
})