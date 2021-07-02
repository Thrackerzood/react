export function fetchAjax (url:string,method:string){
   return fetch(url , {
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
   },
      method: method,
   }).then(response => response.json())
   .then(result => {console.log(result);return result})
   .catch(err => err)
}