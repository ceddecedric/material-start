<<<<<<< HEAD
import angular from 'angular';

import App from 'app/s=';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
  });
=======
import angular from 'angular';

import App from 'app/s=';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
  });
>>>>>>> ac0fbe4e12a77b52ae6b3358dce4a13f8cecc8e5
