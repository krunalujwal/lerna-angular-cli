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
                        selector: 'login-facebook',
                        template: "\n    <p>\n      login-facebook will be implemented soon..\n    </p>\n  ",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZmFjZWJvb2sudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sb2dpbi1mYWNlYm9vay9saWIvbG9naW4tZmFjZWJvb2suc2VydmljZS50cyIsIm5nOi8vbG9naW4tZmFjZWJvb2svbGliL2xvZ2luLWZhY2Vib29rLmNvbXBvbmVudC50cyIsIm5nOi8vbG9naW4tZmFjZWJvb2svbGliL2xvZ2luLWZhY2Vib29rLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRmFjZWJvb2tTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4tZmFjZWJvb2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbG9naW4tZmFjZWJvb2sgd2lsbCBiZSBpbXBsZW1lbnRlZCBzb29uLi5cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5GYWNlYm9va0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5GYWNlYm9va0NvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tZmFjZWJvb2suY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkZhY2Vib29rQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvZ2luRmFjZWJvb2tDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRmFjZWJvb2tNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzttQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLDBFQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3FDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ2xDOztrQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==