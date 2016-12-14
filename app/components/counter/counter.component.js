const counterComponent =  {
  bindings: {
    counter: '<'
  },
  templateUrl: 'components/counter/counter.html',
  controller: 'CounterController'
};

angular.module('app').component('counter', counterComponent);
