export function get3MostRecent(galleryArray) {
  return galleryArray.sort((galleryA, galleryB) => {
    return new Date(galleryB.created_at) - new Date(galleryA.created_at)
  }).slice(0, 3)
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
