import React, { useEffect } from 'react'
import { getOrderG } from '../globals'
import { Navbar } from './Navbar'

const ProjectTwo = () => {
    let order = getOrderG()

    if (order.length === 0) order = [0, 1, 2, 3, 4, 5]

    useEffect(() => {
        const wrap = document.querySelectorAll('.ProjectWrap')
        wrap[0].style.backgroundColor = `var(--color${order[2]})`
    }, [])


    return (
        <>
            <Navbar order={order} currentPageIndex={2} />
            <div className='ProjectWrap'>
                <p>PProject 2</p>
            </div>
        </>
    )
}

export default ProjectTwo