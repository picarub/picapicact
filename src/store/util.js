import store from './store'

let getfetch = (url, dispach_add, is_reverse) => {
 fetch(url).then(response=> {
  return response.json()
 })
 .then(data=> {
  if (data) {
   if (is_reverse) {
    return data.reverse().forEach(da=> {
     store.dispatch(dispach_add(da))
    })
   }
   else {    
    return data.forEach(da=> {
     store.dispatch(dispach_add(da))
    })
   }
  }  
 })
}

export { getfetch }