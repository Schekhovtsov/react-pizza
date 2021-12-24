import React, {useEffect, useState} from 'react';
import {Header} from './components';
import {Routes, Route} from 'react-router-dom';
import {Cart, Home} from './pages';
import axios from 'axios';
import {setPizzas, setPizzas as setPizzasAC} from './redux/actions/pizzas';
import {store} from './redux/store';
import {connect} from 'react-redux';

/*function App() {

    useEffect(() => {
        axios.get('/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        });
    }, [])

    return (
        <div className="wrapper">
           <Header />

            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home pizzas={pizzas}/>} />
                    <Route path={'/cart'} element={<Cart />} />
                </Routes>
            </div>

        </div>
    );
}*/

class App extends React.Component {

    componentDidMount() {
        axios.get('/db.json').then(({data}) => {
           this.props.setPizzas(data.pizzas)
        });
    }

    render() {

        return(
            <div className="wrapper">
                <Header />

                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home pizzas={this.props.items}/>} />
                        <Route path={'/cart'} element={<Cart />} />
                    </Routes>
                </div>

            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filers: state.filters,
    }
}

export default connect(mapStateToProps, {setPizzas})(App);
