import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
    <div className="container">
        <div className="pages">
            <div className='waves'>
                <div className="name">
                    <p><b className="kr">Krisztián</b> Tarjányi <span>|</span>
                    </p>
                    <p className="cd"><i><b>Creative</b> Developer</i></p>
                    <p className="cd"><i>Student</i></p>
                </div>
            </div>
        </div>
        <div className="pages">
            <div className='waves flip'>
                <div className="bio">BIO</div>
            </div>
        </div>
        <div className="pages">
            <section className="gridLayout">
                <div className="card">HAVE A NICE DAY</div>
                <div className="card">CONTACT</div>
            </section>
        </div>
    </div>
)