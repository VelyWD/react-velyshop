import React from 'react';
import './ProductItem.css';
import heartEmpty from '../../assets/icons/heart-empty.svg';
import heartFull from '../../assets/icons/heart-full.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cart-actions';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favorites-actions';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;
    let isFavorite = false;
    props.favorites.map(product => {
        if(product.id === id){
            isFavorite = true;
        }
    });

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <div className="container-fluid d-flex">
                <button
                    className="btn btn-outline-dark col-10 flex-column"
                    onClick={() => props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                    Adaugă în coș
                </button>
                {isFavorite ?
                <img src={heartFull} className="col-2 heart-icon flex-column"
                onClick={() => props.removeFromFavorites({id: id})}/> :
                <img src={heartEmpty} className="col-2 heart-icon flex-column"
                onClick={() => props.addToFavorites({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}/>
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites.favorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (product) => dispatch(removeFromFavorites(product))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);