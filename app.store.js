var app = angular.module('app.store', ['oc.lazyLoad']);
app.service('cart', Cart);
Cart.$inject = ['$ocLazyLoad', '$rootScope'];
function Cart($ocLazyLoad, $rootScope) {
  //$rootScope.$on('test', function() {
  //  console.log('test test hihi');
  //});
  this.buy = function() {
    $ocLazyLoad.load([
      '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.js',
      'bower_components/jquery/dist/jquery.min.js'
    ]).then(function() {
      console.log($('button'));
      console.log('Thanks for buying something! ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
      //$scope.$emit('app');
    });
  }
}
