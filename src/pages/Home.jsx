import React, {useCallback, useMemo} from 'react';
import {Categories, PizzaBlock, PlaceholderBlock, Preloader, SortPopup} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import {ADD_PIZZA_CART} from '../redux/const';
import {addPizzaToCart} from '../redux/actions/cart';

const Home = () => {

    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.items );
    const cartItems = useSelector(({cart}) => cart.items );
    console.log(cartItems)

    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded );
    const {category, sortBy} = useSelector(({filters}) => filters );

    const categories = ['Мясные', 'Сырные', 'Сладкие' ];
    const sortTypes =  [ {name: 'популярности',  type: 'popular', order: 'desc'},
                         {name: 'цене',  type: 'price', order: 'desc'},
                         {name: 'алфавиту', type: 'name', order: 'asc'}, ]

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((activeItem) => {
        dispatch(setSortBy(activeItem));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categories} />

                <SortPopup
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                    items={sortTypes} />

            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">

                {   isLoaded
                    ? pizzas.map((pizza, index) =>
                        <PizzaBlock key={pizza.id}
                                    onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}
                                    countInCart={ cartItems[pizza.id] && cartItems[pizza.id].length }
                                    {...pizza} />
                    )
                    : Array(10)
                        .fill(0)
                        .map((_, index) => <PlaceholderBlock key={index}/> )

                }

            </div>
        </div>
    );
};

export default Home;