// Requisição
postsFetch.interceptors.request.use(
    function (config) {
        console.log("Antes da requisição");
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// Resposta

postsFetch.interceptors.response.use(
    function (config) {
        console.log("Antes da requisição");
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)