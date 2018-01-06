import angular from 'angular'

import { AuthorListComponent } from './author-list/author-list.component'
import { AuthorDetailComponent } from './author-detail/author-detail.component'
import AuthorService from './author-service'

const author = angular
  .module('authors', [])
  .service('AuthorService', AuthorService)
 
  .component('authorList', AuthorListComponent)
  .component('authorDetail', AuthorDetailComponent)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('authors', {
        url: '/',
        component: 'authorList',
        resolve: {
          authors: AuthorService => AuthorService.getSpeakers()
        }
      })
      .state('author', {
        url: '/authors/:id',
        component: 'authorDetail',
        resolve: {
          author: (AuthorService, $stateParams) => AuthorService.getSpeaker($stateParams.id)
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name

export default author