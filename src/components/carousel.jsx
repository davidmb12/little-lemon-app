import React from 'react'
import Card from './card'

const Carousel = ({children}) => {
    return (
        <div className="carousel ">
            {children}
        </div>
    )
}

export default Carousel