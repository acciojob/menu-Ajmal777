import React from "react";

const Item = ({item})=>{
    return (
        <div data-test-id={`menu-item-${item.category}`}>
            <img src={item.img} />
            <div>
                <p>{item.title}</p>
                <span>${item.price}</span>
            </div>
            <p>{item.desc}</p>
        </div>
    )
}

export default Item;