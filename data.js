// TO DO REALIZAR PAGINACION
const url  = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'
fetch (url)
.then(res => res.json())
.then(data => {
    console.log(data.data);
    let body = ''
    for(dato of data.data){
        console.log(dato.id);
        body += ` <tr><td> ${dato.id} </td> <td> ${dato.name} </td> <td> ${dato.type} </td><td> ${dato.desc} </td> </tr>`
    }
    document.getElementById('data').innerHTML = body
})