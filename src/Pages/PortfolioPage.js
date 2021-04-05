import React, { useState } from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import portfolios from '../Components/allPortfoilios'

const PortfolioPage = () => {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        const filteredData = portfolios.filter((item) => {
            return (
                item.category === category
            );
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title-port">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolio-content">
                <Categories filter={filter} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage
