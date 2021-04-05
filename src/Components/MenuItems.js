import React from 'react'

const MenuItems = ({ menuItem }) => {
    return (
        <div className="menu-port">
            {
                menuItem.map((item) => {
                    return (
                        <div className="portfo" key={item.id}>
                            <div className="image-data">
                                <img src={item.image} alt="pic" />
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}></a>
                                        <a href={item.link2}></a>
                                    </li>
                                </ul>
                            </div>
                            <h5>{item.title}</h5>
                            <p>Some Description</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItems
