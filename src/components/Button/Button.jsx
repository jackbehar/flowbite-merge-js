import React from 'react';
import { Button as ButtonM } from 'flowbite-react';
import PropTypes from 'prop-types';


function Button(props) {
  return <ButtonM {...props} color="primary"/>
}

Button.propTypes = {
  children: PropTypes.node,
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
  gradientDuoTone: PropTypes.oneOf([
    'cyanToBlue',
    'greenToBlue',
    'pinkToOrange',
    'purpleToBlue',
    'purpleToPink',
    'redToYellow',
    'tealToLime',
  ]),
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
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  isProcessing: PropTypes.bool,
  processingSpinner: PropTypes.node,
  disabled: PropTypes.bool,
  as: PropTypes.string,
}
export default Button;
