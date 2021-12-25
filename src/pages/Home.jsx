import React, {useCallback, useMemo} from 'react';
import {Categories, PizzaBlock, Preloader, SortPopup} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../redux/actions/filters';

const Home = () => {

    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.items );

    const categories = ['Мясные', 'Сырные', 'Сладкие' ];
    const sortTypes =  [ {name: 'популярности',  type: 'popular'},
                         {name: 'цене',  type: 'price'},
                         {name: 'алфавиту', type: 'alphabet'}, ]

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    window.test = (index) => {
        dispatch(setCategory(index));
    };

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClickItem={onSelectCategory}
                    items={categories} />

                <SortPopup items={sortTypes} />

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