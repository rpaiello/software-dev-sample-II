let result = fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(data => data.json())
.then(response => {
    let processedResponse = response.map(repo => ({
        name : repo.name,
        email: repo.email,
    }))
    console.log(processedResponse)
})