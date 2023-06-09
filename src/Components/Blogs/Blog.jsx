import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBTooltip,
    MDBContainer
} from 'mdb-react-ui-kit';
import "./Blogs.css"
const Blog = () => {
    return (
        <MDBContainer>
            <h1 style={{ margin: "2rem auto" }} className='text-center'>Blogs</h1>
            <div className='d-flex justify-evenly flex-wrap mx-auto p-2' style={{ width: "90%" }}>
                <div className='blogsCard w-25'>
                    <MDBCard className='w-100'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody className='justify-between'>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBContainer className='d-flex justify-between flex-wrap w-100'>
                                <MDBBtn className='' color='success'>
                                    WhatsApp
                                </MDBBtn>
                                <MDBTooltip wrapperProps={{ color: 'secondary' }} placement='bottom' title='01147398918'>
                                    phone
                                </MDBTooltip>
                            </MDBContainer>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </MDBContainer>
    );
}
export default Blog