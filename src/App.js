import React from 'react';
import {Header} from './components';
import {Route, Routes} from 'react-router-dom';
import {Cart, Home} from './pages';
import axios from 'axios';
import {setPizzas} from './redux/actions/pizzas';
import {useDispatch, useSelector} from 'react-redux';

const App = () => {

    const dispatch = useDispatch();
    const state = useSelector(({pizzas, filters}) => {
        return {
            items: pizzas.items,
            sortBy: filters.sortBy
        };
    });

    React.useEffect(() => {
        axios.get('/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        });
    }, [])

    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home pizzas={state.items} />} />
                    <Route path={'/cart'} element={<Cart />} />
                </Routes>
            </div>

        </div>
    )
}

export default App;
