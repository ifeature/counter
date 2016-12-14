function CounterService () {
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

  const publicAPI = {
    increase,
    decrease,
    getValue,
    onUpdate
  };

  return publicAPI;
}

angular.module('app').factory('CounterService', CounterService);
