import React, { Component } from 'react'

import Spinner from '../Spinner'
import PlaceholderService from '../PlaceholderService'
import CommentInput from '../CommentInput'
import localStorage from '../LocalStorage'

import './style.css'

export default class Comments extends Component {

    placeholderService = new PlaceholderService();

    state = {
        data: null,
    }

    componentDidMount() {
        this.updateItem()
    }

    updateItem() {
        const { itemId } = this.props;

        const localComments = localStorage.getComments(itemId)

        this.placeholderService
            .getComments(itemId)
            .then((data) => {
                this.setState(
                    {
                        data: [...data, ...localComments],
                    }
                )
            });
    }

    addItem = async (itemId, commentValue) => {

        if (commentValue === null || commentValue === "") {
            return
        }

        const responce = await this.placeholderService.postComment(itemId, commentValue)

        localStorage.putComments(itemId, responce[0])

        this.updateItem()
    }

    renderItems(arr) {
        return arr.map((item) => {
            return <View item={item} />
        });
    }

    render() {
        const { data } = this.state

        if (!data) return <Spinner />

        const comments = this.renderItems(data)

        return (
            <div>
                {comments}
                <CommentInput itemId={this.props.itemId} addItem={this.addItem} />
            </div>
        );
    }
}

const View = (props) => {
    const { id, name, body, email } = props.item
    return (
        <div key={Math.random() * 1000} className="comment" >
            <div className="user_info">
                <div className="user_name">
                    <p>{name}</p>
                </div>
                <div className="user_email">
                    <p>{email}</p>
                </div>
            </div>
            <div className="user_body">
                <p className="article__subtitle">{body}</p>
            </div>
        </div >
    )
}

