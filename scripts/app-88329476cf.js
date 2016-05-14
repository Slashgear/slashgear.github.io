/******/!function(l){function e(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return l[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var t={};return e.m=l,e.c=t,e.p="",e(0)}([function(l,e,t){"use strict";var a=t(1),i=t(2),o=t(3);angular.module("slashgearGithubIo",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","toastr"]).config(a.config).config(i.routerConfig).constant("moment",moment).component("landingPage",o.LandingPageComponent)},function(l,e){"use strict";function t(l,e){"ngInject";l.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=t},function(l,e){"use strict";function t(l,e,t){"ngInject";l.state("home",{templateUrl:"app/components/home/home.html"}).state("home.landingpage",{url:"/",template:"<landing-page></landing-page>"}).state("home.curriculum",{url:"/curriculum",templateUrl:"app/components/curriculum/curriculum.html"}).state("home.projects",{url:"/projects",templateUrl:"app/components/projects/projects.html"}).state("home.contact",{url:"/contact",template:"Work in porgress..."}),t.html5Mode(!0),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=t},function(l,e){"use strict";function t(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function l(l,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}return function(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}}(),i=e.LandingPageController=function(){function l(e){"ngInject";t(this,l),this.moment=e}return l.$inject=["moment"],a(l,[{key:"$onInit",value:function(){this.age=this.moment().diff("1993-01-15T12:00:00.000Z","years")}}]),l}();e.LandingPageComponent={templateUrl:"app/components/landing-page/landing-page.html",controller:i}}]),angular.module("slashgearGithubIo").run(["$templateCache",function(l){l.put("app/components/curriculum/curriculum.html",'<div class="mdl-grid curriculum"><div class=mdl-layout-spacer></div><div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--10-col-phone work-experiences-card-wide mdl-card mdl-shadow--2dp"><div class=mdl-card__title><h1 class=mdl-card__title-text>Work experiences</h1></div><div class=mdl-card__supporting-text><h2>Zenika Lyon</h2><p>I\'m currently working for <a href=http://www.zenika.com>Zenika Lyon</a> as an Intern. I\'m creating a web application in AngularJS with Spring Boot Backend.</p><h2>Atos Worldline (August 2014 - January 2015)</h2><p>During my fourth year, I was able to do an internship in the Lyon <a href=http://www.worldline.com>Worldline</a> company. I\'ve joined a team of web developers and mobile working for a big name in the global fast food. I was able to take part in a major project on innovative technologies that I did not previously mastered.</p><p>I worked on:<ul><li>S.E.O</li><li>Barcodes generation</li><li>Shorten Url</li></ul></p><h2>Eolane (July 2013)</h2><p>I did an internship for a period of one month in the company <a href=http://www.eolane.com/ >éolane</a> in Montceau-les-Mines in 2013 in order to access the engineer of my school cycle.</p><p>I have build an application in Visual Basic 6.0 for driving automated testbench of a cardiac defibrillator. I also work on the Bluetooth technology to encode the defibrillator.</p></div></div><div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--10-col-phone polytech-card-wide mdl-card mdl-shadow--2dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>Polytech Lyon</h2></div><div class=mdl-card__supporting-text><p>Getting out of high school, I was able to integrate the integrated preparatory program of the University Polytechnic of Lyon. I stayed for two years, during which I followed a theoretical training based on mathematics and computer science curriculum of License Maths-Info from the <a href=http://www.univ-lyon1.fr>Claude Bernard University</a> in Lyon.</p><p>In 2013, I was able to access the engineering program at my school, in computer science specialty. The school <a href="http://polytech.univ-lyon1.fr/home-755570.kjsp?RH=POLYTECH-FR">Polytech Lyon</a> is in the movement of the <a href="http://www.polytech-reseau.org/index.php?id=14&amp;L=1">Polytech network</a> schools, which currently has 13 schools throughout France. The school <a href="http://polytech.univ-lyon1.fr/home-755570.kjsp?RH=POLYTECH-FR">Polytech Lyon</a> officially joined the network in 2013.</p><p>My shcool offers courses on topics:</p><ul><li>Networks</li><li>DataBases, BI, Big Data</li><li>Web/Mobile Technologies</li><li>Embebedded sofware</li><li>Modeling and problem solving by computer</li><li>Distributed computing</li><li>AI</li></ul><p>At Polytech I have the chance to make 3 internships:</p><ul><li>An internship of one month between the theoretical training and engineering cycle.</li><li>A minimum of 5 months internship in the fourth year.</li><li>A terminal 5 month minimum internship during my fifth year.</li></ul></div></div><div class=mdl-layout-spacer></div></div>'),l.put("app/components/home/home.html",'<div class="mdl-layout mdl-js-layout"><header class="mdl-layout__header mdl-layout__header--scroll"><div class=mdl-layout__header-row><!-- Title --> <span class=mdl-layout-title><a class=mdl-navigation__link ui-sref=home.landingpage style=font-size:20px>Antoine Caron</a> </span><!-- Add spacer, to align navigation to the right --><div class=mdl-layout-spacer></div><!-- Navigation --><nav class=mdl-navigation><a class=mdl-navigation__link ui-sref=home.landingpage>Blog</a> <a class=mdl-navigation__link ui-sref=home.curriculum>Curriculum</a> <a class=mdl-navigation__link ui-sref=home.projects>Projects</a> <a class=mdl-navigation__link ui-sref=home.contact>Contact</a></nav></div></header><div class=mdl-layout__drawer><span class=mdl-layout-title>Antoine Caron</span><nav class=mdl-navigation><a class=mdl-navigation__link ui-sref=home.landingpage>Blog</a> <a class=mdl-navigation__link ui-sref=home.curriculum>Curriculum</a> <a class=mdl-navigation__link ui-sref=home.projects>Projects</a> <a class=mdl-navigation__link ui-sref=home.contact>Contact</a></nav></div><main class="mdl-layout__content ui-view-container"><div class=page-content ui-view></div></main></div>'),l.put("app/components/landing-page/landing-page.html",'<div class=mdl-grid><div class="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone profil-card-wide mdl-card mdl-shadow--2dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>Antoine Caron</h2></div><div class=mdl-card__supporting-text><p>{{$ctrl.age}} years old, Full-Stack Developer, working with AngularJS, Spring Boot, MongoDB. Interessed by Devops.</p><p>Burgundian by birth, adoption Lyonnais, high school diploma in pockets I went to <a href=http://polytech.univ-lyon1.fr/ title="Page Polytech">Polytech Lyon</a> to start my studies to become a computer science engineer.</p><p>Fascinated by new technologies, I have learned during my internships or personal experiences in many areas.</p><p>I was able to work alone or in teams for several years.This site lists many of the IT skills acquired Polytech but some have not been presented here.</p><p>I am currently working for <a href=//www.zenika.com>Zenika</a> as Junior Developer.</p></div></div><div class=mdl-cell--9-col><div class=mdl-grid><h3 class="mdl-cell mdl-cell--12-col">Blog / Articles I Like / Events</h3><div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card kotlin-card-wide mdl-shadow--4dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>Kotlin in action (French)</h2></div><div class=mdl-card__supporting-text>In the Mix-IT, I followed a conference by <a href=http://hadihariri.com/ >Hadi Hariri</a> on the new langague JetBrains : Kotlin.<br>Here are my impressions of this programming language .</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=http://blog.zenika.com/2016/04/27/mes-impressions-sur-le-kotlin-suite-au-mix-it-2016/ >Read More</a></div></div><div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mix-it mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"></div><div class=mdl-card__actions><span class=demo-card-image__filename><a href=https://www.mix-it.fr/ >Mix-IT 2016</a></span></div></div><div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card sido mdl-shadow--4dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>SIDO 2016 (French)</h2></div><div class=mdl-card__supporting-text>Wednesday 6 and Thursday, April 7 held in Lyon the Second Edition of the Showroom of the Internet of Things (SIDO). Back to what I saw.</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=http://blog.zenika.com/2016/04/21/on-etait-au-showroom-de-linternet-des-objets-de-lyon-2016/ >Read More</a></div></div></div></div></div>'),l.put("app/components/projects/projects.html",'<div class=mdl-grid><div class=mdl-layout-spacer></div><div class="mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--10-col-phone"><div class=mdl-grid><div class="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone velov mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"></div><div class=mdl-card__actions><span class=demo-card-image__filename><a href=http://lyonvelov.info/ target=_blank>lyonvelov.info</a></span></div></div><div class="mdl-cell mdl-cell--7-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card cuttingstock mdl-shadow--4dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>2D Cutting Stock Problem</h2></div><div class=mdl-card__supporting-text>Resolution of an optimisation problem with simulate annealing</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=https://github.com/achaussende/tp-2D-cutting-stock-problem target=_blank>See Code on Github</a></div></div><div class="mdl-cell mdl-cell--7-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card tron mdl-shadow--4dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>TRON the Game</h2></div><div class=mdl-card__supporting-text><p>Multi-player game about Tron thema. Game is develop in C and is working on linux</p><p></p><ul><li>SDL for graphics</li><li>FMOD for sound system</li><li>Xbox360 Controller mapping</li><li>AI</li><li>Doxygen</li></ul></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=https://github.com/Slashgear/projet-tron target=_blank>See Code on Github</a></div></div><div class="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card permispiste mdl-shadow--4dp"><div class=mdl-card__title><h2 class=mdl-card__title-text>Spring MVC application : PermisPiste</h2></div><div class=mdl-card__supporting-text><p>Developpement of a web application "permispiste" for using technologies seen in "Informatique Répartie".</p><p>Application uses :</p><ul><li>J2EE</li><li>Spring MVC</li><li>Spring JPA</li><li>Hibernate</li><li>Maven</li><li>MySQL</li><li>Bootstrap Material Design</li><li>JQuery</li></ul></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=https://github.com/Slashgear/portfolio target=_blank>See Code on Github</a></div></div></div></div><div class=mdl-layout-spacer></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-88329476cf.js.map
