import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../constants'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        
        <div className='border bg-gray-20' />
        <p className='w-full text-center text-gray-30'>2024 TRAVEL BLOG | All rights reserved </p>
      </div>

    </footer>
  )
}


export default Footer