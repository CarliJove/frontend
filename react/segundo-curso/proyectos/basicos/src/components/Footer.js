import React from 'react';

const  Footer = ({fecha}) => {
    return (  
        <footer>
            <p>la comida va aqui &copy; {fecha}</p>
        </footer>
    );
}

//lo mismo pero con function expression, te ahorras el return

// const  Footer = () => (
//     <footer>
//         <p>la comida va aqui &copy;</p>
//     </footer>
// );
 
export default Footer;