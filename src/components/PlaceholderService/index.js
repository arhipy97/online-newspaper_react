import React from 'react'

export default class PlaceHolderService {
    _apiBase='https://jsonplaceholder.typicode.com'

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        const body = await res.json();

        return body
    }

    getImages = async () => {
        const collection = await this.getResourse(`/photos`);
        return this.cutArray(collection);
    }

    getPost = async (id) => {
        const post = await this.getResourse(`/posts/${id}`)
        return post
    }

    getComments = async (id) => {
        const comments = await this.getResourse(`/posts/${id}/comments`)
        return comments
    }

    cutArray = (array) => {
        array.length = 100
        return array
    }

    postComment = async ( id, value ) => {
        let response = await fetch(`${this._apiBase}${`/posts/${id}`}/comments`, {
            method: 'POST',
            body: JSON.stringify([
                {
                    postId: id,
                    id: "doesn't matter",
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: value,
                }
            ]),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return response.json()
    }
}