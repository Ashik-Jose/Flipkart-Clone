const initState = {
    categories: [],
    loading: false,
    error: null
}

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_ALL_CATEGORIES_REQUEST':
            state = {
                ...state,
                loading: true
            }
            break;
        case 'GET_ALL_CATEGORIES_SUCCESS':
            state = {
                ...state,
                categories: action.payload.categories,
                loading: false
            }
            break;
        case 'GET_ALL_CATEGORIES_FAILURE':
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case 'ADD_NEW_CATEGORY_REQUEST':
            state = {
                ...state,
                loading: true
            }
            break;
        case 'ADD_NEW_CATEGORY_SUCCESS':
            state = {
                ...state,
                loading:false,
            }
            break;
        case 'ADD_NEW_CATEGORY_FAILURE':
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
    }
    return state;
}