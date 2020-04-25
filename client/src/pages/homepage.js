import React from 'react';
import '../css/homepage.css';
import todoImg from '../images/todolist.svg'
const Homepage = () => {
    return (
        <div className="container">
            <div className="right-column">
                <div className="image-container">
                    <img src={todoImg} alt='todo-list' />
                </div>
            </div>
            <div className="left-column">

            </div>
        </div>
    )
}




export default Homepage;
