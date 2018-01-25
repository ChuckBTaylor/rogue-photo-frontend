import React from 'react';
import PhotographerCard from './PhotographerCard';

const PhotographerList = props => {
  console.log(props, "from photographer list");
  const photographers = Object.values(props.photographers).map(photographer => <PhotographerCard key={photographer.id} photographer={photographer} /> )
  return (
    <div>
      List of Galleries
      {photographers}
    </div>
  )
}

export default PhotographerList;
