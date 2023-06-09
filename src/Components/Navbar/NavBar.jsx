import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse className="m-25" navbar show={showBasic}>
                    <MDBNavbarNav className='mb-2 d-flex justify-content-evenly  '>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' to='/'>
                                <Link className='hoverNav' to='/'>Home</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><Link to="/about" className='hoverNav'>About</Link></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><Link to="/contact-us" className='hoverNav'>Contact us</Link></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><Link to="/blogs" className='hoverNav'>Blogs</Link></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'><Link to="faq" className='hoverNav'>FAQ</Link></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='LoginDriveBtn p-auto'>
                            <MDBNavbarLink className='primary-colorBtn' href='#'><Link to="/loginDriver" style={{ color: 'inherit' }}>Login Driver</Link></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                <MDBIcon fas icon="globe-americas" />{" "}Language
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className='DropdownMenu'>
                                <MDBDropdownItem link><MDBIcon flag='ae' />AR</MDBDropdownItem>
                                <MDBDropdownItem link><MDBIcon flag='us' />EN</MDBDropdownItem>
                                <MDBDropdownItem link><MDBIcon flag='fr' />FR</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>

                    </MDBNavbarNav>


                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}