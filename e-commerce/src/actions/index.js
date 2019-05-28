import unsplash from '../api/unsplash';

export const onTermChange = (term) => {
    return async function (dispatch) {

        const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page: 12 }
        })
        dispatch({type: 'ON_TERM_CHANGE', payload: response.data.results})
    }
}

export const addToCart = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}

export const removeFromList = (item) => {
    return {
        type: 'REMOVE_LIST',
        payload: item
    }
}
