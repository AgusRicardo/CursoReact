import React from 'react';
import reactDom from 'react-dom';
import './Item.css'
import Item from './Item';

const ItemList = ({productos}) =>{
    console.log(productos);

    return (
        <React.Fragment>
            <div>
                {
                    productos.map((dato)=>
                        <div key={dato.id}>
                            <Item img={dato.img} title={dato.title}  precio={dato.precio} />
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}
export default ItemList