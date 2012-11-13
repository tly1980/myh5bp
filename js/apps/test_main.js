define(['jquery', 'jasmine', 'jasmine-html', 'mustache',
    'underscore', 'bootstrap', 'backbone'],
    function($, jasmine, jasmine_html, mustache){
  var ret = {
    jasmine: jasmine,
    jasmine_html: jasmine_html
  };

  describe("Test Module Loading", function() {
      it("verify if jquery is loading properly", function() {
          expect($).not.toBe(undefined);
      });

      it("verify if bootstrap is loading properly", function() {
          //require('bootstrap');
          expect($('body').popover).not.toBe(undefined);
      });

      it("verify if Backbone is loading properly", function() {
          //require('backbone');
          expect(Backbone).not.toBe(undefined);
      });

      it("verify if underscore is loading properly", function() {
          //require('underscore');
          expect(_).not.toBe(undefined);
      });

      it("verify if Mustache is loading properly", function() {
          var mustache = require('mustache');
          expect(mustache).not.toBe(undefined);
          expect(mustache.render('{{val}}', {val:'hello'})).toBe('hello');
      });
  });

  
  var jasmineEnv = ret.jasmine.getEnv();
  jasmineEnv.updateInterval = 250;
  var htmlReporter = new ret.jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  ret.verify = function(){
      jasmineEnv.execute();
  };
  return ret;
});