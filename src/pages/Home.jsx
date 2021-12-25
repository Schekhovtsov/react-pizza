import React from 'react';
import {Categories, PizzaBlock, Preloader, SortPopup} from '../components';

const Home = ({pizzas}) => {

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClick={(name) => console.log(name)}
                    items={['Мясные', 'Сырные' ]}/>

                <SortPopup items={[ {name: 'популярности',  type: 'popular'},
                                    {name: 'цене',  type: 'price'},
                                    {name: 'алфавиту', type: 'alphabet'},
                ]}/>

            </div>

            {   !pizzas.length > 0
                ? <Preloader />
                : <h2 className="content__title">Все пиццы</h2>   }

            <div className="content__items">

                {   pizzas &&
                    pizzas.map((pizza, index) =>
                        <PizzaBlock key={pizza.id} {...pizza} />
                    )
                }

            </div>
        </div>
    );
};

export default Home;