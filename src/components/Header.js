import React from 'react'
//import "./Header.css"
import styled from 'styled-components'

const StyleHeader = styled.div`
background-color: red;
    color: white;
    text-align: center;
    justify-content: center;
    display: grid;
    font-size: 25px;
    text-transform: uppercase;
    border: 5px;
    border-color: black;
    font-family: Times New Roman', Times, serif;
    font-weight: bold;
    border-radius: ;
`
function Header() {
    return(
        <div className="top-container">
            
            <div className="header">
        <StyleHeader>
        DOMA: Enhanced Individual Search
        </StyleHeader>
        
             </div>
        </div>
    )
}
export default Header;