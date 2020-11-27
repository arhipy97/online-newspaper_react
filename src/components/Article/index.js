import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class Article extends Component {
    render() {
        const { id, title, url } = this.props.item

        const path = `/article/${id}`

        return (
            <div className="article" key={id}>
                <div>
                    <img className="article__img" src={url} alt="img"></img>
                </div>
                <Link to={path} className="article__title">{title}</Link>
            </div>
        );
    }
}