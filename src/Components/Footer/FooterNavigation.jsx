import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavigation = () => {
    return (
        <>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                    <Link href='#!' className='text-reset'>
                        Home
                    </Link>
                </p>
                <p>
                    <Link href='#!' className='text-reset'>
                        About
                    </Link>
                </p>
                <p>
                    <Link href='#!' className='text-reset'>
                        BLogs
                    </Link>
                </p>
                <p>
                    <Link href='#!' className='text-reset'>
                        Contact us
                    </Link>
                </p>
            </MDBCol>
        </>
    )
}

export default FooterNavigation
