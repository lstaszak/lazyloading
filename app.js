var app = angular.module('app', ['oc.lazyLoad'])
  .run(Init)
  .controller('AppCtrl', AppCtrl)
  .controller('AppEchoCtrl', AppEchoCtrl);
Init.$inject = ['$ocLazyLoad', '$rootScope'];
function Init($ocLazyLoad, $rootScope) {
  var listenerCleanFn = $rootScope.$on('test', function() {
    console.log('test');
  });
  $rootScope.$on('$destroy', function() {
    listenerCleanFn();
  });
}
AppCtrl.$inject = ['$injector', '$ocLazyLoad', '$rootScope', '$scope'];
function AppCtrl($injector, $ocLazyLoad, $rootScope, $scope) {
  this.click = function() {
    $ocLazyLoad.load({
      name: 'app.store',
      files: [
        'app.store.js'
      ]
    }).then(function() {
      var cart = $injector.get('cart');
      cart.buy();
      $scope.$emit('test');
    });
  }
}
AppEchoCtrl.$inject = ['$injector', '$ocLazyLoad', '$rootScope', '$scope'];
function AppEchoCtrl($injector, $ocLazyLoad, $rootScope, $scope) {
  this.echo = function() {
  }
}
