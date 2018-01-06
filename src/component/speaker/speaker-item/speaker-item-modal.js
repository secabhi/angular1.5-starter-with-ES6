class SpeakerItemModal {
    constructor () {}
  
    onClick () {
      this.onSayHello({
        $event: {
          speakerName: this.data.name
        }
      })
    }
  }
  
  export default SpeakerItemModal