const API_ROOT = "https://4i3qvu8esj.execute-api.eu-central-1.amazonaws.com/dev/"


export function apiFetch<T>(path: string): Promise<T>{
    return fetch(API_ROOT + path)
        .then(response => response.json())
        .then((data: T) => data)
}

