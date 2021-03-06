import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Workspace = (props) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);

    const onClick = (e) => {
        if(e.target.id === "ws") setIsActive(prev => !prev);
    }

    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0].tagName !== 'BUTTON' && e.target.id !== "ws") {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);


    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={onClick} id="ws" className="nav-dropdown-btn">Workspaces <img id="ws" className="arrow-icon" src="./client/public/pictures/down-arrow-icon.png" /></button>
            <nav className={'menu ' + (isActive ? 'active' : 'inactive')}>
                <div className="dropdown-title">Workspaces</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-title">Current Workspaces</div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image">WTC</div>
                        <a href="#">Walk the Cat</a>
                    </div>
                </div>
            </nav>
        </div >
    );
}


export default Workspace;