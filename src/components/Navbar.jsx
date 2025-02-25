import React from 'react'
import logo from '../assets/ecodoe-logo.png'

const Navbar = () => {
  return (
    <div className='container'>
      <div>
        <ul>
          <li><img src={logo} alt="" /></li>
          <li>BERANDA</li>
          <li>TENTANG KAMI</li>
          <li>UMKM</li>
          <li>PORTOFOLIO</li>
          <li>PRODUK</li>
          <li>BLOG</li>
          <li>KARIR</li>
          <li>KONTAK</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar