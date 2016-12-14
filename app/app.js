(function () {
  const bootstrapModule = (module) => {
    angular.bootstrap(document, [module.name]);
  };

  const init = () => {
    document.addEventListener('readystatechange', e => {
      if (e.target.readyState === 'interactive') {
        bootstrapModule(app);
      }
    });
  };

  const makeConfig = () => {
    return ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
      $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      })
      .state('timer', {
        url: '/timer',
        component: 'timer'
      })
      .state('timer.counter', {
        url: '/counter',
        resolve: {
          counter(CounterService) {
            return CounterService.getValue();
          }
        },
        component: 'counter'
      });

      $urlRouterProvider.otherwise('/');
    }];
  };

  const makeRun = () => {
    return ['$state', ($state) => {
      $state.go('home');
    }];
  };

  const app = angular.module('app', ['ui.router']);
  app.config(makeConfig());
  app.run(makeRun());

  init();

}());
