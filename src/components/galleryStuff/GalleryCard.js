import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryCard = props => {
  console.log(props);
  const route = `/galleries/${props.gallery.id}`
  const photographerRoute = `/photographers/${props.gallery.user_id}`
  return(
    <div>
      <NavLink to={route}>
      Header Photo
      </NavLink>
      <br />
      <NavLink to={route}>
      Event: {props.gallery.event}
      </NavLink>
      <br />
      <NavLink to={route}>
      Location: {props.gallery.location}
      </NavLink>
      <br />
      <NavLink to={route}>
      Date: {props.gallery.date}
      </NavLink>
      <br />
      <NavLink to={photographerRoute}>
      Photographer: {props.gallery.user_id}
      </NavLink>
      <br />
      <br />
    </div>
  )
}

export default GalleryCard;
