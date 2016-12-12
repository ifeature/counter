class CounterController {
  constructor(CounterResource) {
    Object.assign(this, {
      CounterResource
    });
  }
  $onInit() {
    const updateCounter = () => {
      this.counter = this.CounterResource.getValue();
    };
    
    this.CounterResource.onUpdate(updateCounter);
  }
  change({type}) {
    switch(type) {
      case 'increase': {
        this.CounterResource.increase();
        break;
      }
      case 'decrease': {
        this.CounterResource.decrease();
        break;
      }
      default: {
        break;
      }
    }
  }
}

function CounterResource() {
  const counter = {
    value: 0
  };

  const handlers = [];

  const increase = () => {
    counter.value++;
    update();
  };

  const decrease = () => {
    counter.value--;
    update();
  };

  const getValue = () => counter.value;

  const update = () => {
    handlers.forEach(handler => {
      handler();
    });
  };

  const onUpdate = (handler) => {
    handlers.push(handler);
  };

  return {
    increase,
    decrease,
    getValue,
    onUpdate
  };
}

angular.module('app')
  .factory('CounterResource', CounterResource)
  .component('counter', {
    bindings: {
      counter: '<'
    },
    templateUrl: 'components/counter/counter.html',
    controller: CounterController
  })
