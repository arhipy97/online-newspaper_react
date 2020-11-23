import React, { Component } from 'react'

import PlaceholderService from '../PlaceholderService'
import Spinner from '../Spinner'
import Article from '../Article'


import './style.css'


export default class ArticleList extends Component {

    placeholderService = new PlaceholderService();

    state = {
        list: null,
    };

    constructor() {
        super();
        this.getList();
    }

    getList() {
        this.placeholderService
            .getImages()
            .then(this.onListLoaded);
    }

    onListLoaded = (list) => {
        this.setState(
            {
                list,
            },
        );
    };

    renderItems(arr) {
        return arr.map((item) => {
            return <Article key={Math.random() * 1000} item={item} />
            });
    }

    render() {
        const { list } = this.state;

        if (!list) return <Spinner />;

        const items = this.renderItems(list);

        return (
            <div key="articleList" className="articleList">
                {items}
            </div>
        );
    }
}