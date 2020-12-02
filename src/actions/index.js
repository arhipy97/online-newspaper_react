import localStorage from '../components/LocalStorage'

//Image

const imagesRequested = () => {
    return {
        type: 'FETCH_PHOTOS_REQUEST'
    }
};

const imagesLoaded = (images) => {
    return {
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: images,
    };
};

const imagesError = (error) => {
    return {
        type: 'FETCH_PHOTOS_FAILURE',
        payload: error
    };
};

const fetchImages = (placeHolderService, dispatch) => () => {
    dispatch(imagesRequested());
    placeHolderService.getImages()
        .then((data) => dispatch(imagesLoaded(data)))
        .catch((err) => dispatch(imagesError(err)));
};


//Post

const postRequested = () => {
    return {
        type: 'FETCH_POST_REQUEST'
    }
};

const postLoaded = (post) => {
    return {
        type: 'FETCH_POST_SUCCESS',
        payload: post,
    };
};

const postError = (error) => {
    return {
        type: 'FETCH_POST_FAILURE',
        payload: error
    };
};

const fetchPost = (placeHolderService, dispatch) => (id) => {
    dispatch(postRequested());
    placeHolderService.getPost(id)
        .then((data) => dispatch(postLoaded(data)))
        .catch((err) => dispatch(postError(err)));
};


//Comment

const commentsRequested = () => {
    return {
        type: 'FETCH_COMMENTS_REQUEST'
    }
};

const commentsLoaded = (post) => {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: post,
    };
};

const commentsError = (error) => {
    return {
        type: 'FETCH_COMMENTS_FAILURE',
        payload: error
    };
};

const fetchComments = (placeHolderService, dispatch) => (itemId) => {
    dispatch(commentsRequested());
    const localComments = localStorage.getComments(itemId)
    placeHolderService.getComments(itemId)
        .then((data) => {
            dispatch(commentsLoaded([...data, ...localComments]))
        })
        .catch((err) => dispatch(commentsError(err)));
};

const addComment = (placeHolderService, dispatch) => (commentValue, itemId, lastIdx) => {
    let localComments = []

    dispatch(commentsRequested());
    placeHolderService.postComment(itemId, commentValue, lastIdx + 1)
        .then((newComment) => {
            localStorage.putComments(itemId, newComment[0]);
            localComments = localStorage.getComments(itemId);
        })
        .then(() => {
            return placeHolderService.getComments(itemId)
        })
        .then((data) => {
            dispatch(commentsLoaded([...data, ...localComments]))
        })
        .catch((err) => dispatch(commentsError(err)));
};

export {
    fetchImages,
    fetchPost,
    fetchComments,
    addComment,
};
