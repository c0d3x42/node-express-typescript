/**
 * Created by borja on 25/03/16.
 */

/// <reference path='./typings/main.d.ts' />

import appModule = require('./app');
var app = appModule.App;

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});