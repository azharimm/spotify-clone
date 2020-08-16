import React from 'react'
import Header from './Header.js'
import './Body.css'

const Body = ({spotify}) => {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body
