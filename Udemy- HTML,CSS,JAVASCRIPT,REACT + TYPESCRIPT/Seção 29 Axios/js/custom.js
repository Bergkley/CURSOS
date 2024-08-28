const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    Headers : {
        "Accept": "application/json",
        "Authorization": "MEUTOKENNOAPP1"
    }
})