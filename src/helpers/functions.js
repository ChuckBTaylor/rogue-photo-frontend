export function get3MostRecent(galleryArray) {
  let arr = []
  galleryArray.forEach(gallery => {
    console.log(arr, 'array');
    console.log(gallery, 'gallery');
    if(arr.length === 0){
      arr.push(gallery)
    }else if(arr.length === 1){
      if(isNewGalleryMoreRecent(gallery, arr[0])){
        arr.unshift(gallery)
      }else{
        arr.push(gallery)
      }
    }else if(arr.length === 2){
      if(isNewGalleryMoreRecent(gallery, arr[0])){
        arr.unshift(gallery)
      }else if(isNewGalleryMoreRecent(gallery, arr[1])){
        arr.splice(1, 0, gallery)
      }else{
        arr.push(gallery)
      }
    }else{
      checkRecentGalleries(gallery, arr)
    }
  })
  return arr;
}

function checkRecentGalleries(newGallery, array){
  array.forEach((gallery, idx) => {
    if(isNewGalleryMoreRecent(newGallery, gallery)){
      array.splice(idx, 1, newGallery)
      return
    }
  })
}

function isNewGalleryMoreRecent(newGallery, oldGallery){
  return Date.parse(newGallery.created_at) > Date.parse(oldGallery.created_at)
}
