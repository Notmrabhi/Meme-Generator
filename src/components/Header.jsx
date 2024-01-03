import React from "react"
import trollface from '../assets/trol-face.jpg'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">NOT MR ABHI</h4>
        </header>
    )
}