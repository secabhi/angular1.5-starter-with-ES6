import angular from 'angular'

import speaker from './speaker'
import author from './author'

const components = angular
  .module('app.components', [speaker,author])
  .name

export default components