class TimerController {
  constructor() {

  }
  $onInit() {
    
  }
}

angular.module('app')
  .component('timer', {
    templateUrl: 'components/timer/timer.html',
    controller: TimerController
});
