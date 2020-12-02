const updateArticleDescription = (state, action) => {

    if (state === undefined) {
        return {
            post: {},
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                post: {},
                loading: true,
                error: null
            };

        case 'FETCH_POST_SUCCESS':
            return {
                post: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_POST_FAILURE':
            return {
                post: {},
                loading: false,
                error: action.payload
            };

        default:
            return state.articleDescription;
    }
};

export default updateArticleDescription;