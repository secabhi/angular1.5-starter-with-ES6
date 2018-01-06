import angular from 'angular'
import uiRouter from 'angular-ui-router'
import common from './common/common'
import components from './component/component';
import {AppComponent} from './app.component'

const root = angular.module('angularCmp',[
uiRouter,
common,
components
])
.component('acApp',AppComponent)

document.addEventListener('DOMContentLoaded',()=> angular.bootstrap(document,['angularCmp']));

export default root