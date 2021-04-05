import React from 'react'

const Categories = ({ filter }) => {
    return (
        <div>
            <h1 onClick={() => filter("Animation")}>Animation</h1>
        </div>
    )
}

export default Categories
