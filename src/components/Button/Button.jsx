import React from 'react';
import { Button as ButtonM } from 'flowbite-react';
import PropTypes from 'prop-types';


function Button(props) {
  return <ButtonM {...props} />
}

Button.propTypes = {

  /** 
  * The content of the Button.
  */
  children: PropTypes.node,

  /** 
  * The color of the button.
  */
  color: PropTypes.oneOf([
    'dark',
    'failure',
    'gray',
    'info',
    'light',
    'purple',
    'success',
    'warning',
    'blue',
    'cyan',
    'green',
    'indigo',
    'lime',
    'pink',
    'red',
    'teal',
    'yellow',
  ]),

  /** 
  *  Display button with a gradient background with two colors.
  */
  gradientDuoTone: PropTypes.oneOf([
    'cyanToBlue',
    'greenToBlue',
    'pinkToOrange',
    'purpleToBlue',
    'purpleToPink',
    'redToYellow',
    'tealToLime',
  ]),

  /** 
  * Display button with a gradient background.
  */
  gradientMonochrome: PropTypes.oneOf([
    'info',
    'success',
    'cyan',
    'teal',
    'lime',
    'failure',
    'pink',
    'purple',
  ]),

  /** 
  * Display button with transparent background and colored border.
  */
  outline: PropTypes.bool,

  /** 
  * Display the button with rounded corners.
  */
  pill: PropTypes.bool,

  /** 
  * The size of the Button.
  */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),

  /** 
  * Add label to the button.
  */
  label: PropTypes.string,
  
  /** 
  * Add a loading state to the button element.
  */
  isProcessing: PropTypes.bool,
  
  /** 
  * customize the spinner icon by passing a React component.
  */
  processingSpinner: PropTypes.node,
  
  /** 
  * Make button disabled.
  */
  disabled: PropTypes.bool,  /** 
  
  * The as prop provides you the ability to transform the <Button /> component into another component or HTML element. This prop accepts a string representing an HTML tag or a functional React component.
  */
  as: PropTypes.string,
}
export default Button;
