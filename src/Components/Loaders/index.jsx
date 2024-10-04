import { tailspin } from 'ldrs'
import './Loader.scss'
import React from 'react'

const Loader = () => {

    tailspin.register()

    return (
        <div className='container_loader'>
            <l-tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color="black"
            ></l-tailspin>
        </div>
    )
}

export default Loader
