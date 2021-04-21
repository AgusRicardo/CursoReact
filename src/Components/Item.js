import React from 'react'
import './Item.css'


const Item = ({img,title,precio,id}) => {
    console.log(img,title,precio,id);
    return (
        <React.Fragment>
            <div className='card'>
                <div>
                    <img src={img} alt="" className='img-card'/>
                    <p>{title}</p>
                    <p>{precio}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item