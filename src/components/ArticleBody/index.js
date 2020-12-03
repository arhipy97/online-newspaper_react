import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ErrorIndicator from '../ErrorIndicator'
import { connect } from 'react-redux'
import { withPlaceHolderService, withSpinner } from '../hoc'
import { fetchPost } from '../../actions';
import './style.css'
import compose from '../../utils/compose'

import './style.css'

const ArticleBody = ( { post: {body, title, id}} ) => {
    return (
        <div key={id}>
            <div className="post">
                <h1 className="post__title">{title}</h1>
                <p className="post__body">{body}</p>
                <Link to="/" className="refferToMain"> Back to Main Page </Link>
            </div>
        </div>
    );
}

class ArticleBodyContainer extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.itemId);
    }

    render() {
        const WithSpinnerArticleBody = withSpinner(ArticleBody)

        if (this.props.error) {
            return <ErrorIndicator />;
        }

        return (
            <WithSpinnerArticleBody props = {this.props}/>
        )
    }
}

const mapStateToProps = ({ articleDescription: { post, loading, error } }) => {
    return { post, loading, error };
}

const mapDispatchToProps = (dispatch, { placeHolderService }) => {
    return {
        fetchPost: fetchPost(placeHolderService, dispatch),
    };
};

export default compose(
    withPlaceHolderService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ArticleBodyContainer)
