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
                        selector: 'login-google',
                        template: "\n    <p>\n      login-google  will be implemented soon..\n    </p>\n  ",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZ29vZ2xlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9naW4tZ29vZ2xlL2xpYi9sb2dpbi1nb29nbGUuc2VydmljZS50cyIsIm5nOi8vbG9naW4tZ29vZ2xlL2xpYi9sb2dpbi1nb29nbGUuY29tcG9uZW50LnRzIiwibmc6Ly9sb2dpbi1nb29nbGUvbGliL2xvZ2luLWdvb2dsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkdvb2dsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dpbi1nb29nbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbG9naW4tZ29vZ2xlICB3aWxsIGJlIGltcGxlbWVudGVkIHNvb24uLlxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkdvb2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Hb29nbGVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLWdvb2dsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luR29vZ2xlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvZ2luR29vZ2xlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkdvb2dsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2lDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHlFQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O21DQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ2hDOztnQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==