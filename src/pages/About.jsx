import React, { useEffect } from 'react'
import { getOrderG } from '../globals'
import { Navbar } from './Navbar'

const About = () => {
    let order = getOrderG()

    if (order.length === 0) order = [0, 1, 2, 3, 4, 5]


    useEffect(() => {
        const wrap = document.querySelectorAll('.AboutWrap')
        wrap[0].style.backgroundColor = `var(--color${order[0]})`
    }, [])


    return (
        <>
            <Navbar order={order} currentPageIndex={0} />
            <div className='AboutWrap'> 
                <p>AAbout</p>
            </div>
        </>
    )
}

export default About