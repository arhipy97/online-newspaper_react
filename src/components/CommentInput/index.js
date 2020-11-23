import "./styles.css"
import React, { Component } from 'react'

import PlaceholderService from '../PlaceholderService'

export default class CommentInput extends Component {

    placeholderService = new PlaceholderService();

    state = {
        commentValue: '',
    }

    onLableChange = (event) => {
        this.setState({
            commentValue: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const {itemId, addItem } = this.props

        await addItem(itemId ,this.state.commentValue);

        this.setState({
            commentValue: '',
        })
    }

    render() {
        return (
            <form className="commentInput"
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.onLableChange}
                    placeholder="Comment"
                    value={this.state.commentValue}></input>
                <button className="submitForm">
                    Add Comment
                </button>
            </form>
        )
    }
}