import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('auth', {path: '/'}, function () {
        this.route('login', { path: '/' });
    });
    this.route('dashboard');
});
