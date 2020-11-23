import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PlaceholderService from '../PlaceholderService'
import Spinner from '../Spinner'
import Article from '../Article'

import './style.css'

export default class ArticleBody extends Component {

    placeholderService = new PlaceholderService();

    state = {
        post: null,
    }

    componentDidMount() {
        this.updateItem()
    }

    updateItem() {
        const { itemId } = this.props;

        this.placeholderService
            .getPost(itemId)
            .then((post) => {
                this.setState({
                    post,
                })
            });
    }

    render() {
        const { post, comments } = this.state

        if(!post) return <Spinner/>

        const { id, body, title } = post

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
}