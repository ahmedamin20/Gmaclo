import { MDBBtn, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

const LogoSocial = () => {
    return (
        <MDBCol md='3' lg='4' xl='3' className='mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
            </h6>
            <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
            </p>
            <div className='d-flex mx-auto w-100' style={{ justifyContent: "space-evenly" }}>
                <MDBBtn className='m-1 d-flex justify-center' style={{ backgroundColor: '#3b5998' }} href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
                <MDBBtn className='m-1 d-flex justify-center' style={{ backgroundColor: '#55acee' }} href='#'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn className='m-1 d-flex justify-center' style={{ backgroundColor: '#ffac44' }} href='#'>
                    <MDBIcon fab icon='snapchat' />
                </MDBBtn>
                <MDBBtn className='m-1 d-flex justify-center' style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
                <MDBBtn className='m-1 d-flex justify-center' style={{ backgroundColor: '#25d366' }} href='#'>
                    <MDBIcon fab icon='whatsapp' />
                </MDBBtn>
            </div>
        </MDBCol>
    )
}

export default LogoSocial
