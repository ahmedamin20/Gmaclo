import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';
const LonginForm = () => {
    return (
        <MDBContainer className='p-4'>
            <MDBCard className='my-5 w-75  mx-auto'>
                <MDBCardBody className='p-5'>
                    <h4 className="my-5  fw-bold ls-tight px-3">
                        Welcome to Login Driver!
                    </h4>
                    <form>
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='Phone' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />
                        <MDBBtn className='w-100 mb-4 primary-colorBtn' size='md' type='submit'>Login</MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
};
export default LonginForm