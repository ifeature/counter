class CounterController {
  constructor(CounterService) {
    Object.assign(this, {
      CounterService
    });
  }
  $onInit() {
    const updateCounter = () => {
      this.counter = this.CounterService.getValue();
    };

    this.CounterService.onUpdate(updateCounter);
  }
  increaseCounter() {
    this.CounterService.increase();
  }
  decreaseCounter() {
    this.CounterService.decrease();
  }
}

angular.module('app').controller('CounterController', CounterController);
