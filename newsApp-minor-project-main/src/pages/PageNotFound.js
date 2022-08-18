import React from 'react'
import '../PageNotFound.css'
import Link from '@mui/material/Link';
// import '../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    NavbarBrand
} from "reactstrap";


const PageNotFound = () => {
    return (
        <div className='notFoundDiv'>
            <header >ERROR 404: PAGE NOT FOUND</header>
            <br />
            <Link class="notFound" href="./main" variant="body2"></Link>
        </div>
    )
}

export default PageNotFound
