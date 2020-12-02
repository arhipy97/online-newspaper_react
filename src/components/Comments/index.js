import React, { Component } from 'react'
import CommentInput from '../CommentInput'

import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

import { connect } from 'react-redux'
import { withPlaceHolderService } from '../hoc'
import { fetchComments, addComment } from '../../actions';
import compose from '../../utils/compose'

import './style.css'

const Comment = ({ comments }) => {
    return (
        <div>
            {
                comments.map((item) => <View key={item.id} {...item} />)
            }
        </div>
    );
}

const View = ({ name, body, email }) => {
    return (
        <div className="comment" >
            <div className="user_info">
                <div className="user_name">
                    <p>{name}</p>
                </div>
                <div className="user_email">
                    <p>{email}</p>
                </div>
            </div>
            <div className="user_body">
                {body}
            </div>
        </div >
    )
}

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.itemId);
    }

    render() {
        const { comments, loading, error, itemId } = this.props;
        let lastIdx = 0

        if(comments.length > 0) {
            lastIdx = comments[comments.length - 1].id; //for uniq
        }

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <div>
                <Comment comments={comments} />
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
