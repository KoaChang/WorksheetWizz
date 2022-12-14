import React from "react";
import './File.css'

function File({title,img,body,link,target}){
  return(

      <div className='card-container'>
      <a href={link} target={target}>
              <img src={img} class="card_img"/>
              <div className="card-content">
                  <h3>{title}</h3>
              </div>
              <div className="btn">
                <button>
                  <a href={link} target={target} >{body}</a>
                </button>
              </div>
              </a>
          </div>
    
    

  )
}

export default File