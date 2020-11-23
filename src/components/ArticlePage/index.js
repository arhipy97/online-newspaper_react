import React from 'react'

import ArticleBody from '../ArticleBody'
import Comments from '../Comments'

import './style.css'

const ArticlePage = (props) => {
    const { itemId }= props

    return (
        <div className='article__page'>
            <ArticleBody itemId={itemId}/>
            <Comments itemId={itemId}/>
        </div>
    )

}

export default ArticlePage