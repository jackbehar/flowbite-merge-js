// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flowbite } from 'flowbite-react';
import customTheme from './custom-theme';
import './index.css'



export default function UXPinWrapper({ children }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
  )
}
