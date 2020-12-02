import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import { connect } from 'react-redux'
import { withPlaceHolderService } from '../hoc'
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
        const { post, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <ArticleBody post={post} />
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
