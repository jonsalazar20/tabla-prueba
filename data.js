const url = 'https://api.datos.gob.mx/v1/calidadAire'
fetch(url)
.then(res => res.json())
.then(data => {
    const {results} = data
    console.log(results); 
    let datosJson = JSON.parse(JSON.stringify(results))
    let body = ''
    for (let i = 0; i<results.length; i++) {
        body += `<tr><td>${results[i]}</td></tr>`
    }
    let prueba = document.getElementById('data')
    prueba.innerHTML = JSON.stringify(results)
    prueba = body
})
.catch(err => console.error(err))