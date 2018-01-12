import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryList = props => {
  console.log(props, "from gallery list");
  const galleries = Object.values(props.galleries).map(gallery => <GalleryCard key={gallery.id} gallery={gallery} /> )
  return (
    <div>
      List of Galleries
      {galleries}
    </div>
  )
}

export default GalleryList;
