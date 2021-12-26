import React, {useCallback, useMemo} from 'react';
import {Categories, PizzaBlock, PlaceholderBlock, Preloader, SortPopup} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';

const Home = () => {

    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.items );
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded );

    const categories = ['Мясные', 'Сырные', 'Сладкие' ];
    const sortTypes =  [ {name: 'популярности',  type: 'popular'},
                         {name: 'цене',  type: 'price'},
                         {name: 'алфавиту', type: 'alphabet'}, ]

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSortBy = useCallback((activeItem) => {
        dispatch(setSortBy(activeItem));
    }, []);

    React.useEffect(() => {

        dispatch(fetchPizzas())
    }, [])

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClickItem={onSelectCategory}
                    items={categories} />

                <SortPopup
                    onSelectItemRedux={onSortBy}
                    items={sortTypes} />

            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">

                {   isLoaded
                    ? pizzas.map((pizza, index) =>
                        <PizzaBlock key={pizza.id} {...pizza} />
                    )
                    : Array(10).fill(<PlaceholderBlock />)
                }

            </div>
        </div>
    );
};

export default Home;