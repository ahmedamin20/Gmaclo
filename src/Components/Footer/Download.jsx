import { MDBCol, MDBRipple } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'
import googlePlay from "../Footer/imgs/GooglePlay.png";
import appStore from "../Footer/imgs/AppStore.png";

const Download = () => {
    return (
        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Download</h6>
            <Link href="https://play.google.com/store/apps" className='mt-2' rel="">
                <MDBRipple rippleTag='a'>
                    <img
                        src={googlePlay}
                        className='img-fluid rounded w-50'
                        alt='example'
                    />
                </MDBRipple>
            </Link>
            <Link href="https://www.apple.com/eg/app-store/" className='mt-4' rel="">
                <MDBRipple rippleTag='a'>
                    <img
                        src={appStore}
                        className='img-fluid rounded w-50 '
                        alt='example'
                    />
                </MDBRipple>
            </Link>

        </MDBCol>
    )
}

export default Download
