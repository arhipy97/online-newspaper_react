const updateArticleList = (state, action) => {

    if (state === undefined) {
        return {
            list: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_PHOTOS_REQUEST':
            return {
                list: [],
                loading: true,
                error: null
            };

        case 'FETCH_PHOTOS_SUCCESS':
            return {
                list: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_PHOTOS_FAILURE':
            return {
                list: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.articleList;
    }
};

export default updateArticleList;