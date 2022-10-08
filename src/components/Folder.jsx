import React from "react";
import './File.css'
import { Link } from 'react-router-dom';

function Folder({title,img,body,link,target}){
  return(
    
    <div className='card-container'>
        <img src={img} class="card_img"/>
        <div className="card-content">
            <h3>{title}</h3>
        </div>
        <div className="btn">
          <button>
            <Link to={link}>
            <span>{body}</span>
            </Link>
          </button>
        </div>
    </div>

  )
}

export default Folder