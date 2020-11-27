class LocalStorage {
    constructor() {
        this.keyName = 'post'
    }

    getComments(postId) {
        return JSON.parse(localStorage.getItem(`${postId}`) || '[]')
    }

    putComments(postId, obj) {
        const comments = this.getComments(postId)
        comments.push(obj)
        const FIELD = `${postId}`
        localStorage.setItem(postId, JSON.stringify(comments))
    }
}

export default new LocalStorage();