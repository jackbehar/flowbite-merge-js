import React from 'react';
import { Button as ButtonM } from 'flowbite-react';
import PropTypes from 'prop-types';
// import '../../index.css'

function Button(props) {
  return <ButtonM {...props} />
}
Button.propTypes = {
  children: PropTypes.node
}
export default Button;
