import React, { Component } from 'react'

export default class PlaceHolderService extends Component{
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

    getPosts = async (id) => {
        const person = await this.getResourse(`people/${id}/`)
        return this._transformPerson(person)
    }

    getComments = async (id) => {
        const person = await this.getResourse(`people/${id}/`)
        return this._transformPerson(person)
    }

    cutArray = (array) => {
        array.length = 100
        return array
    }

    _transformImages = (person) => {
        console.log(person);
        // return {
        //     id: this._extractId(person),
        //     name: person.name,
        //     gender: person.gender,
        //     birthYear: person.birth_year,
        //     eyeColor: person.eye_color,
        // }
    }
}