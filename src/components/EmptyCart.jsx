import React from 'react';
import cartEmptyImage from './../assets/img/empty-cart.png'
import {Link} from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пуста <icon>😕</icon></h2>
                <p>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={cartEmptyImage} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    );
};

export default EmptyCart;