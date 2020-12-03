import updateArticleList from './ArticleList'
import updateArticleDescription from './ArticleDescription'
import updateComments from './Comments'

const reducer = (state, action) => {
    return {
        articleList: updateArticleList(state, action),
        articleDescription: updateArticleDescription(state, action),
        comments: updateComments(state, action),
    };
};

export default reducer;