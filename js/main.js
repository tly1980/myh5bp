// Start loading the main app file. Put all of
// your application logic in there.

require.config({
    baseUrl: 'js/vendor',
    paths: {
        jquery: ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
            'jquery-1.8.2.min'],
        bootstrap: [ 'bootstrap',
                    // don't know why, the cdnjs version is not placing the pop over properly
            '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.1/bootstrap.min'],
        underscore: ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
             'underscore'],
        backbone: ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
             'backbone'],
        mustache: ['//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.0/mustache.min', 'mustache'],
        text: 'text',
        apps:   '../apps',

        jasmine: 'jasmine-1.2.0/jasmine',
        'jasmine-html': 'jasmine-1.2.0/jasmine-html'

    },

    shim:{
        jquery: {
            exports: "$"
        },
        bootstrap: {
            deps: ['jquery'],
            exports: "bootstrap"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: "backbone"
        },
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine-html'
        }
    }
});

requirejs(['jquery', 'bootstrap'], function($) {
    console.log('hello');
});
