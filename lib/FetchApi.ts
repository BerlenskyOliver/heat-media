type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" |
                "get" | 'post' | 'put' | 'delete' | "patch"

const FetchApi = async function (url: string, method: Method = "GET", data: any = {}) {
    let response;
    if(method !== 'GET'){
        response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    }else{
        response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    if(response.ok){
        return response.json()
    }else {
        throw await response.json()
    }
}

export default FetchApi