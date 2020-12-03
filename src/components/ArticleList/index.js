import React, { Component } from 'react'
import ArticleImage from '../ArticleImage'
import ErrorIndicator from '../ErrorIndicator'
import { connect } from 'react-redux'
import { withPlaceHolderService, withSpinner } from '../hoc'
import { fetchImages } from '../../actions';
import './style.css'
import compose from '../../utils/compose'

const ArticleList = ({ list }) => {
    return (
        <div key="articleList" className="articleList">
            {
                list.map((item) => <ArticleImage key={item.id} item={item} />)
            }
        </div>
    );
}

class ArticleListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const WithSpinnerArticleList = withSpinner(ArticleList)

        if (this.props.error) {
            return <ErrorIndicator />;
        }

        return <WithSpinnerArticleList props = {this.props}/>
    }
}

const mapStateToProps = ({ articleList: { list, loading, error } }) => {
    return { list, loading, error };
}

const mapDispatchToProps = (dispatch, { placeHolderService }) => {
    return {
        fetchImages: fetchImages(placeHolderService, dispatch),
    };
};

export default compose(
    withPlaceHolderService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ArticleListContainer)