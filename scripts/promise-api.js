//Promises
function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success == true) {
                resolve("Found data")
            } else {
                reject("Failed to find data")
            }
        }, Math.floor(Math.random()*10000 + 3000))
    });
}

getData(true).then(console.log).catch(console.warn);
getData(false).then(console.log).catch(console.warn);

let jsonString = '{"id":1,"name":"Jake","address":{"zip":"10801","geo":{"lat":1337.401012,"long":4555.200219}}}'
jobject = JSON.parse(jsonString);
console.log(jobject.address.geo);

let person = {
    "id":2,
    "name":"Robert",
    "address":{
        "zip":"47408",
        "geo":{
            "lat":9999.99999,
            "long":1111.11111
        }
    }
}

let jsonPersonString = JSON.stringify(person);
console.log(jsonPersonString);
jsonPersonString = JSON.parse(jsonPersonString);
console.log(jsonPersonString)

function iterateJSON(data) {
    let target = document.querySelector('#data')
    for (let article of data) {
        target.innerHTML += `${article.name}<br>`
    }
}

fetch(`https://jsonplaceholder.typicode.com/users`).then(response => {
    return response.json()
}).then(data => iterateJSON(data));