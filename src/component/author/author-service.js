export default class AuthorService {
    constructor($http) {
        this.$http = $http
    }

    getSpeakers() {
        return [{
            "id": 1,
            "name": "One",
            "photo": "https://www.lunapic.com/editor/premade/transparent.gif",
            "talk": "",
            "description": "",
        },
        {
            "id": 2,
            "name": "Two",
            "photo": "https://www.lunapic.com/editor/premade/transparent.gif",
            "talk": "",
            "description": "",
        },
        {
            "id": 3,
            "name": "Three",
            "photo": "https://www.lunapic.com/editor/premade/transparent.gif",
            "talk": "",
            "description": "",
        },
        {
            "id": 4,
            "name": "Four",
            "photo": "https://www.lunapic.com/editor/premade/transparent.gif",
            "talk": "",
            "description": "",
        }]

    }

    getSpeaker(id) {
        return {
            "id": 1,
            "name": "One",
            "photo": "",
            "talk": "",
            "description": "",
        }

    }
}