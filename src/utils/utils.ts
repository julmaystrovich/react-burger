export function checkResponse(res: Response) {
    if (res.ok) {
       return res.json();    
    } else {
        return Promise.reject("Error: " + res.status);
    }
}