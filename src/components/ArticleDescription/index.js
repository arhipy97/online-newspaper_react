import React, { Component } from 'react'
import ArticleBody from '../ArticleBody'
import Comments from '../Comments'

import './style.css'

const ArticleDescription = ({ itemId }) => {
    return (
        <div className='article__page'>
            <ArticleBody itemId={itemId} />
            <Comments itemId={itemId} />
        </div>
    )
}

export default ArticleDescription