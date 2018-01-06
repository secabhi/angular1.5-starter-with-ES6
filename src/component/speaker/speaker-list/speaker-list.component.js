import controller from './speaker-list-modal'

export const SpeakerListComponent = {
  bindings: {
    speakers: '<'
  },
  controller,
  template: `
    <ul class="collection">
      <speaker-item ng-repeat="speaker in $ctrl.speakers"
                    data="speaker"
                    on-say-hello="$ctrl.sayHello($event);">
      </speaker-item>
    </ul>
  `
}