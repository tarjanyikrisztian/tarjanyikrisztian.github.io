import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Navbar = ({order, currentPageIndex}) => {
    console.log(order)

    
    useEffect(() => {
        const blocks = document.querySelectorAll('.navBlock')

        for (let i = 0; i < order.length; i++) {
            blocks[i].style.backgroundColor = `var(--color${order[i]})`
            if (i === currentPageIndex) {
                blocks[i].style.display = 'none'
            }
          }
    
    }, [order])

    const changePage = (blockId) => {
        
      }
 
  return (
    <nav>
        <Link to='/about' className="navBlock" onClick={() => changePage(0)}></Link>
        <Link to='/project-one' className="navBlock" onClick={() => changePage(1)}></Link>
        <Link to='/project-two' className="navBlock" onClick={() => changePage(2)}></Link>
        <Link to='/project-three' className="navBlock" onClick={() => changePage(3)}></Link>
        <Link to='/project-four' className="navBlock" onClick={() => changePage(4)}></Link>
        <Link to='/contact' className="navBlock" onClick={() => changePage(5)}></Link>
    </nav>
  )
}
