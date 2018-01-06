class SpeakerListModal {
    constructor() {
        this.message = 'Hi ngErs!'
    }

    sayHello({ speakerName }) {
        window.alert(`Hello ${speakerName}!`)
    }
}

export default SpeakerListModal