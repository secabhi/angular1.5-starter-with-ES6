import controller from './author-list.modal'

export const AuthorListComponent = {
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