import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
            <div className='header'>
                <h1 className='word'>NEWS</h1>
                <div className='verticalline' />
                <div className='infobox'>It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper. </div>
            </div>
            <div className='optionbox'>
            <Link to={'/list'}><Button className='option'>News in List</Button></Link>
            <Link to={'/grid'}><Button className='option'>News in Grid</Button></Link>
                
            </div>
            <div className='horizontalline'></div>
        </div>
            )
}
 export default Header