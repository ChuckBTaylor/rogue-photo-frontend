export function formatJSON(array){
  let obj = {}
  array.forEach(el => obj[el.id] = el)
  return obj;
}


export function formatDate(date){
  
}
