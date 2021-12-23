import React from 'react';
import {Categories, PizzaBlock, Preloader, SortPopup} from '../components';

const Home = ({pizzas}) => {

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClick={(name) => console.log(name)}
                    items={['Мясные', 'Сырные' ]}/>

                <SortPopup items={['популярности', 'цене', 'алфаиту']}/>

            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {!pizzas && <Preloader />}

                {
                    pizzas.map((pizza, index) =>
                        <PizzaBlock key={pizza.id} {...pizza} />
                    )
                }

            </div>
        </div>
    );
};

export default Home;