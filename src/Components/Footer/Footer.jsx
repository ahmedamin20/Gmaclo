import React from 'react';
import { MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import FooterNavigation from './FooterNavigation';
import LogoSocial from './LogoSocial';
import Download from './Download';
const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='pb-0  text-center text-lg-start text-muted'>




            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>

                        <LogoSocial />

                        <FooterNavigation />


                        <Download />
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4'>
                © 2023 Copyright:{" "}
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    DrCode
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;