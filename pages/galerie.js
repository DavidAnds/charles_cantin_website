import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar/Navbar'
import FontLink from '../components/FontLink/FontLink'

export default function galerie() {
    return (
        <>
            <FontLink />
             <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar/>
        </>
    )
}
