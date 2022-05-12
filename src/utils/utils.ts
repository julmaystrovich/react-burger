export function checkResponse(res: Response) {
    if (res.ok) {
       return res.json();    
    } else {
        return Promise.reject("Error: " + res.status);
    }
}


export const translateStatus = (status: string): string => {
    if (status === "created") {
      return "Создан";
    } else if (status === "pending") {
      return "Готовится";
    } else {
      return "Выполнен";
    }
};