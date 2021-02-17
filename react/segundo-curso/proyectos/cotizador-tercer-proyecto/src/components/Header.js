import React from 'react';
import styled from '@emotion/styled';
import Proptypes from 'prop-types';


const ContenedorHeader = styled.header`
    background-color: #a8e8f0;
    padding: 10px;
    font-weight:bold;
    color: #FFF8DC;
    `; 

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`
const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
      );
}

Header.propTypes = {
    titulo: Proptypes.string.isRequired
}
 
export default Header;