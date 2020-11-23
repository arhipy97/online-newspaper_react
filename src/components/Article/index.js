import React, { Component } from 'react'

import './style.css'

export default class Article extends Component {
    render() {
        const { id, title, url } = this.props.item

        return (
            <div className="article" key={id}>
                <div>
                    <img className="article__img" src={url} alt="img"></img>
                </div>
                <p className="article__title" onClick={() => console.log(id)}>${title}</p>
            </div>
        );
    }
}