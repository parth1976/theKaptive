import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <React.Fragment>
           <footer className="k_flex k_align-center k_content-center">
               <p className="k_flex k_align-center">2018 Copyrights <Link to="/" className="k_pl-5">© The Kaptive</Link></p>
           </footer>
        </React.Fragment>
    )
}

export default Footer