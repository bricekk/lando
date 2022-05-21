import React from 'react'

import { FaAward } from 'react-icons/fa'

import './Quote.css'

function Quote() {
    return (
        <div className='quote'>
            <div className='quote__container'>
                <div className='quote__container-text'>
                    <h1>Your first quote offered.<p><FaAward  className='quote__container-text-icon'/></p>A quote is one more step towards your success. Don't waste any more time.</h1>
                    <button>GET A QUOTE</button>
                </div>
            </div>
        </div>
    )
}

export default Quote