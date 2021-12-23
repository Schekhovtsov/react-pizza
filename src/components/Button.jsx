import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PizzaBlock from './PizzaBlock';

const Button = ({ onClick, className, outline, children }) => {

    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    )

}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    outline: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button