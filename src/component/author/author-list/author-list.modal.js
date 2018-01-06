class AuthorListModal {
    constructor() {
        this.message = 'Hi ngErs!'
    }

    sayHello({ speakerName }) {
        window.alert(`Hello ${speakerName}!`)
    }
}

export default AuthorListModal