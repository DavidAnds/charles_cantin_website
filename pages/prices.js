import React from 'react'
import FontLink from '../components/FontLink/FontLink'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import styles from '../styles/Prices.module.css'

export default function prices() {
    return (
        <div>
            <FontLink />
            <Navbar />
            <Title> Tarifs</Title>
            
            <Footer />
        </div>
    )
}
