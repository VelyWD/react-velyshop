const initialState = {
    favorites: []
}

export function favoritesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_FAVORITES':
            return Object.assign({}, state, {
                favorites: [
                    ...state.favorites,
                    {
                        ...action.payload.product
                    }
                ]
            })
        case 'REMOVE_FROM_FAVORITES':
            const filteredFavorites = state.favorites.filter(product => {
                return product.id !== action.payload.id
            });
            return Object.assign({}, state, {
                favorites: filteredFavorites
            });
        default:
            return state;
    }
}