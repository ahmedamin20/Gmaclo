import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit'
import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <MDBCard className='d-flex justify-evenly flex-row-reverse m-3'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <Link>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </Link>
            </MDBRipple>
            <MDBCardBody className='d-flex justify-center align-center flex-column mt-50'>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default About
