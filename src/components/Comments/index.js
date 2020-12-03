import React, { Component } from 'react'
import CommentInput from '../CommentInput'
import Comment from '../CommentView'
// import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import { connect } from 'react-redux'
import { withPlaceHolderService, withSpinner } from '../hoc'
import { fetchComments, addComment } from '../../actions';
import compose from '../../utils/compose'

import './style.css'



class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.itemId);
    }

    render() {
        const WithSpinnerComment = withSpinner(Comment)
        let lastIdx = 0

        const { comments, loading, error, itemId } = this.props;

        if(comments.length > 0) {
            lastIdx = comments[comments.length - 1].id; //for uniq
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <div>
                <WithSpinnerComment props = { this.props } />
                <CommentInput
                    addItem={(commentValue) => this.props.addComment(commentValue, itemId, lastIdx )}/>
            </div>
        );
    }
}

const mapStateToProps = ({ comments: { comments, loading, error } }) => {
    return { comments, loading, error };
}

const mapDispatchToProps = (dispatch, { placeHolderService }) => {
    return {
        fetchComments: fetchComments(placeHolderService, dispatch),
        addComment: addComment(placeHolderService, dispatch),
    };
};

export default compose(
    withPlaceHolderService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CommentsContainer)
