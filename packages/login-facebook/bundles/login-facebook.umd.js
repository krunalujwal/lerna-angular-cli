(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('login-facebook', ['exports', '@angular/core'], factory) :
    (factory((global['login-facebook'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginFacebookService = (function () {
        function LoginFacebookService() {
        }
        LoginFacebookService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LoginFacebookService.ctorParameters = function () { return []; };
        /** @nocollapse */ LoginFacebookService.ngInjectableDef = i0.defineInjectable({ factory: function LoginFacebookService_Factory() { return new LoginFacebookService(); }, token: LoginFacebookService, providedIn: "root" });
        return LoginFacebookService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginFacebookComponent = (function () {
        function LoginFacebookComponent() {
        }
        /**
         * @return {?}
         */
        LoginFacebookComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoginFacebookComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-login-facebook',
                        template: "\n    <p>\n      login-facebook works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        LoginFacebookComponent.ctorParameters = function () { return []; };
        return LoginFacebookComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginFacebookModule = (function () {
        function LoginFacebookModule() {
        }
        LoginFacebookModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [LoginFacebookComponent],
                        exports: [LoginFacebookComponent]
                    },] },
        ];
        return LoginFacebookModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LoginFacebookService = LoginFacebookService;
    exports.LoginFacebookComponent = LoginFacebookComponent;
    exports.LoginFacebookModule = LoginFacebookModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZmFjZWJvb2sudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sb2dpbi1mYWNlYm9vay9saWIvbG9naW4tZmFjZWJvb2suc2VydmljZS50cyIsIm5nOi8vbG9naW4tZmFjZWJvb2svbGliL2xvZ2luLWZhY2Vib29rLmNvbXBvbmVudC50cyIsIm5nOi8vbG9naW4tZmFjZWJvb2svbGliL2xvZ2luLWZhY2Vib29rLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRmFjZWJvb2tTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxvZ2luLWZhY2Vib29rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxvZ2luLWZhY2Vib29rIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkZhY2Vib29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbkZhY2Vib29rQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1mYWNlYm9vay5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luRmFjZWJvb2tDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTG9naW5GYWNlYm9va0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5GYWNlYm9va01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O21DQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQix5Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsc0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7cUNBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO3dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDbEM7O2tDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9