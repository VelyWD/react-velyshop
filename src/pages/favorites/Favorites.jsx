import React from "react";
import Layout from '../../components/layout/Layout';
import './Favorites.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/favorites-actions";
import heartFull from '../../assets/icons/heart-full.svg';

function Favorites(props) {
    return(
        <Layout>
            <div className="favorites-page container-fluid container-min-max-width
            d-flex flex-column justify-content-center align-items-center">
                {
                    props.favorites.length ?
                    <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Elimina din Favorite</p>
                        </div>
                    {
                        props.favorites.map(product => {
                            return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                    <img src={product.image} alt="Produs"/>
                                    <p>{ product.name }</p>
                                </div>
                                <p className="w-50">{ product.price } { product.currency }</p>
                                <div className="w-25 d-flex justify-content-center">
                                    <div onClick={() => props.removeFromFavorites({id: product.id})}>
                                        <img src={heartFull} className="heart-icon aaa mb-2"/>
                                    </div>
                                </div>
                            </div>
                        })
                    } 
                    </div> :
                    <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse in favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites.favorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);