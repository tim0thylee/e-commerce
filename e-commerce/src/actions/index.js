import unsplash from '../api/unsplash';

export const onTermChange = (term) => {
    return async function (dispatch) {

        const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page: 12 }
        })
        dispatch({type: 'ON_TERM_CHANGE', payload: response.data.results})
    }
}
