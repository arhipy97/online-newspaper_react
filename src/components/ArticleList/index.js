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

    componentDidMount() {
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

    render() {
        const { list } = this.state;

        if (!list) return <Spinner />;

        return (
            <div key="articleList" className="articleList">
                {
                    list.map((item) =>  <Article key={ item.id } item={ item } /> )
                }
            </div>
        );
    }
}