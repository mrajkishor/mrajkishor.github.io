import React from 'react';
import PropTypes from 'prop-types';
import "../assets/css/Item.scss";

Item.propTypes = {
    
};

function Item(props) {
    return (
        <div>
           Okkkk.... {props.name}
        </div>
    );
}

export default Item;