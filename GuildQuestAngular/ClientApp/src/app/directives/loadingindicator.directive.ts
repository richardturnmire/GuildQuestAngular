import { Directive } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Directive({
  selector: '[Loadingindicator]'
})
export class LoadingindicatorDirective
{
  private spinner: NgxSpinnerService;
  //public isRouteLoading: boolean = false;
  public routeLoadingIndicator = function ($rootScope)
  {
    return {
      restrict: 'E',
      template: "<h1 ng-if='isRouteLoading'>Loading...</h1>",
      link: function (scope, elem, attrs)
      {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function ()
        {
          scope.isRouteLoading = true;
          scope.spinner.show();
        });

        $rootScope.$on('$routeChangeSuccess', function ()
        {
          scope.isRouteLoading = false;
          scope.spinner.hide();
        });
      }
    };
  };

  constructor() { }
}
