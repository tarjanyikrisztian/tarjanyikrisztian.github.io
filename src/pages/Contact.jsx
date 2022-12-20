import React, { useEffect } from 'react'
import { getOrderG } from '../globals'
import { Navbar } from './Navbar'

const Contact = () => {
    let order = getOrderG()

    if (order.length === 0) order = [0, 1, 2, 3, 4, 5]

    useEffect(() => {
        const wrap = document.querySelectorAll('.ContactWrap')
        wrap[0].style.backgroundColor = `var(--color${order[5]})`
    }, [])


    return (
        <>
            <Navbar order={order} currentPageIndex={5} />
            <div className='ContactWrap'>
                <p>CContact</p>
            </div>
        </>
    )
}

export default Contact