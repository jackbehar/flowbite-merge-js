// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flowbite } from 'flowbite-react';

import './index.css'
// eslint-disable-next-line react/prop-types


const customTheme= {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};



export default function UXPinWrapper({ children }) {
  
  return <Flowbite theme={{ theme: customTheme }}>
    {children}
  </Flowbite>;
}
