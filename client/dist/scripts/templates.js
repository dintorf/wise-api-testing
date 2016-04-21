angular.module('wiseagent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{ vm.title }}</h1>\n" +
    "            <h3>{{ vm.version }}</h3>\n" +
    "            <p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\n" +
    "            <code>app/modules/home/home.html</code>\n" +
    "            <br>\n" +
    "            <p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <h1 class=\"margin-top-50\">Features</h1>\n" +
    "            <ul>\n" +
    "                <li class=\" text-center\" ng-repeat=\"item in vm.listFeatures\">\n" +
    "                    <p><ng-md-icon icon=\"check\"></ng-md-icon> {{item.feature}}</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <div ng-controller=\"HomeSidenavCtrl as homeNav\">\n" +
    "            <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "                <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                    <div layout=\"row\">\n" +
    "                        <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                            <div>Home</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-toolbar>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"MenuCtrl as menu\" ng-cloak>\n" +
    "    <ng-include src=\"'app/modules/layouts/menu/menu.html'\"></ng-include>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">wiseagent</a>\n" +
    "            </h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-button aria-label=\"Apps\" ng-click=\"showApps = !showApps\">\n" +
    "                <ng-md-icon icon=\"apps\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                            <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/menu/menu.html',
    "<md-toolbar>\n" +
    "    <div class=\"md-toolbar-tools\">\n" +
    "        <md-button ng-click=\"menu.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "            <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "        </md-button>\n" +
    "        <h3>\n" +
    "            <a href=\"/\">Wise Agent</a>\n" +
    "        </h3>\n" +
    "        <span flex></span>\n" +
    "        <md-menu-bar>\n" +
    "            <md-menu>\n" +
    "                <button aria-label=\"Open Apps\" ng-click=\"menu.openMenu($mdOpenMenu, $event)\" class=\"md-icon-button\">\n" +
    "                    <md-tooltip md-direction=\"bottom\">\n" +
    "                        Menu\n" +
    "                    </md-tooltip>\n" +
    "                    <md-icon> apps </md-icon>\n" +
    "                </button>\n" +
    "                <md-menu-content width=\"3\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"menu.navigateTo('home.dashboard')\">\n" +
    "                            <md-icon>dashboard</md-icon>\n" +
    "                            Dashboard\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item ng-repeat=\"item in menu.options\">\n" +
    "                        <md-button ng-click=\"menu.navigateTo(item.link)\">\n" +
    "                            <md-icon>{{item.icon}}</md-icon>\n" +
    "                            {{item.name}}\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "            <md-menu>\n" +
    "                <button aria-label=\"Open Apps\" ng-click=\"menu.openMenu($mdOpenMenu, $event)\" class=\"md-icon-button\">\n" +
    "                    <md-tooltip md-direction=\"bottom\">\n" +
    "                        Search\n" +
    "                    </md-tooltip>\n" +
    "                    <md-icon> search </md-icon>\n" +
    "                </button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-input-container>\n" +
    "                            <label>Search Contacts</label>\n" +
    "                            <input ng-model=\"search.who\">\n" +
    "                        </md-input-container>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "            <md-menu>\n" +
    "                <button aria-label=\"Open Settings\" ng-click=\"menu.openMenu($mdOpenMenu, $event)\" class=\"md-icon-button\">\n" +
    "                    <md-tooltip md-direction=\"bottom\">\n" +
    "                        Settings\n" +
    "                    </md-tooltip>\n" +
    "                    <md-icon> more_vert </md-icon>\n" +
    "                </button>\n" +
    "                <md-menu-content width=\"3\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"menu.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"menu.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"menu.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </md-menu-bar>\n" +
    "    </div>\n" +
    "</md-toolbar>"
  );

}]);
