import React from 'react'
import './footer.css'
export const Footer = () => {
let footerStyle = {
    position: "relative",
    width:"100%",
    top:"70vh"
    
}

    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}