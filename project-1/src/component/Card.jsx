import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = () => {
  return (
    <div className="container">

        <div className="top">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10'></img>
            <button>Save <Bookmark size={20}/> </button>
        </div>

        <div className="center">
            <h3>Amazon  <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
                <h4>Part-Time</h4>
                <h4>Senior-level</h4>
            </div>
        </div>

        <div className="bottom">
            <div className="charge">
                <h3>$120/hr</h3>
                <h5>Mumbai,india</h5>
            </div>
            <button>Apply now</button>
        </div>

    </div>
  )
}

export default Card