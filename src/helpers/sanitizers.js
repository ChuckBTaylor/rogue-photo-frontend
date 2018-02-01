export function formatJSON(array){
  console.log(array)
  let obj = {}
  array.forEach(el => obj[el.id] = el)
  return obj;
}


export function formatDate(date){
  
}
