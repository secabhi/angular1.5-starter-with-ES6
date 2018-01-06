import controller from './speaker-item-modal'


export const SpeakerItemComponent = {
    bindings: {
      data: '<',
      onSayHello: '&'
    },
    controller,
    template: `
      <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
        <img class="circle" width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
        <span class="title">{{$ctrl.data.name}}</span>
        <p><a href="#!/speaker/{{$ctrl.data.id}}">{{$ctrl.data.talk}}</a></p>
        <div class="secondary-content" style="cursor: pointer;" ng-click="$ctrl.onClick();">
          <i class="material-icons">thumb_up</i>
        </div>
      </li>
    `
  }