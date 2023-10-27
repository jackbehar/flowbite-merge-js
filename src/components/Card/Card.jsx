import React from 'react';
import { Card as CardM } from 'flowbite-react';
import PropTypes from 'prop-types';


function Card(props) {
  return <CardM {...props} />
}

Card.propTypes = {
  /** 
  * The content of the Card.
  */
  children: PropTypes.node,
  /** 
  * Use the horizontal prop to show the card in a horizontal layout.
  */
  horizontal: PropTypes.bool,

  /** 
   * The URL of the image to display.
   */
  imgSrc: PropTypes.string,

  /** 
   * The image's alt tag.
  */
  imgAlt: PropTypes.string,

  /** 
   * The link to go to when clicking on this card.
   */
  href: PropTypes.string,

  /** 
   * Overwrites the theme. Will be merged with the context theme.
   */
  theme: PropTypes.object,
}

export default Card;
