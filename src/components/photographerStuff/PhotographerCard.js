import React from 'react';
import { NavLink } from 'react-router-dom';

const PhotographerCard = props => {
  console.log(props);
  const route = `/photographers/${props.photographer.id}`
  const photographerRoute = `/photographers/${props.photographer.user_id}`
  return(
    <div>
    </div>
  )
}

export default PhotographerCard;
