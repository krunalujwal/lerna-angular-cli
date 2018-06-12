(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('login-google', ['exports', '@angular/core'], factory) :
    (factory((global['login-google'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginGoogleService = (function () {
        function LoginGoogleService() {
        }
        LoginGoogleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LoginGoogleService.ctorParameters = function () { return []; };
        /** @nocollapse */ LoginGoogleService.ngInjectableDef = i0.defineInjectable({ factory: function LoginGoogleService_Factory() { return new LoginGoogleService(); }, token: LoginGoogleService, providedIn: "root" });
        return LoginGoogleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginGoogleComponent = (function () {
        function LoginGoogleComponent() {
        }
        /**
         * @return {?}
         */
        LoginGoogleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoginGoogleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-login-google',
                        template: "\n    <p>\n      login-google works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        LoginGoogleComponent.ctorParameters = function () { return []; };
        return LoginGoogleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoginGoogleModule = (function () {
        function LoginGoogleModule() {
        }
        LoginGoogleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [LoginGoogleComponent],
                        exports: [LoginGoogleComponent]
                    },] },
        ];
        return LoginGoogleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LoginGoogleService = LoginGoogleService;
    exports.LoginGoogleComponent = LoginGoogleComponent;
    exports.LoginGoogleModule = LoginGoogleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZ29vZ2xlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9naW4tZ29vZ2xlL2xpYi9sb2dpbi1nb29nbGUuc2VydmljZS50cyIsIm5nOi8vbG9naW4tZ29vZ2xlL2xpYi9sb2dpbi1nb29nbGUuY29tcG9uZW50LnRzIiwibmc6Ly9sb2dpbi1nb29nbGUvbGliL2xvZ2luLWdvb2dsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkdvb2dsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9naW4tZ29vZ2xlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxvZ2luLWdvb2dsZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Hb29nbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2luR29vZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1nb29nbGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkdvb2dsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMb2dpbkdvb2dsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Hb29nbGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztpQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLG9EQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O21DQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ2hDOztnQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==