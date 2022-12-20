import { useEffect, useState } from 'react'
import { Navbar } from './Navbar';
import { setOrderG, getOrderG } from '../globals';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  let [order, setOrder] = useState(getOrderG);

  const changeOrder = () => {
    let orderTemp = []
    while (orderTemp.length < 6) {
      const random = Math.floor(Math.random() * 6)
      if (!orderTemp.includes(random)) {
        orderTemp.push(random)
      }
    }
    setOrder(orderTemp)
    setOrderG(orderTemp)
  }

  if (order.length === 0) changeOrder();


  useEffect(() => {
    const blocks = document.querySelectorAll('.block')

    for (let i = 0; i < order.length; i++) {
      blocks[i].style.backgroundColor = `var(--color${order[i]})`
    }

  }, [])


  const changePage = (blockId) => {
    const block = document.querySelector(`#block-${blockId}`);
    const h1tags = document.querySelectorAll('h1');
    h1tags[blockId].style.display = 'none';
    block.style.zIndex = 5;
    block.style.mixBlendMode = 'normal';
    block.style.transform = 'scale(10)';
    setTimeout(() => {
      switch (blockId) {
        case 0:
          navigate(`/about`)
          break;
        case 1:
          navigate(`/project-one`)
          break;
        case 2:
          navigate(`/project-two`)
          break;
        case 3:
          navigate(`/project-three`)
          break;
        case 4:
          navigate(`/project-four`)
          break;
        case 5:
          navigate(`/contact`)
          break;
        default:
          break;
      }
    }, 500)

  }



  return (
    <div className='MainWrap'>
      <div className="Main">
          <div className="block" id="block-0" onClick={() => changePage(0)}>
            <h1>About me</h1>
          </div>
        <div className="block" id="block-1" onClick={() => changePage(1)}>
          <h1>Project One</h1>
        </div>
        <div className="block" id="block-2" onClick={() => changePage(2)}>
          <h1>Project Two</h1>
        </div>
        <div className="block" id="block-3" onClick={() => changePage(3)}>
          <h1>Project Three</h1>
        </div>
        <div className="block" id="block-4" onClick={() => changePage(4)}>
          <h1>Project Four</h1>
        </div>
        <div className="block" id="block-5" onClick={() => changePage(5)}>
          <h1>Contact</h1>
        </div>
        <h4 id="name">
          Krisztian Tarjjanyyi
        </h4>
      </div>
    </div>
  )
}

export default Home