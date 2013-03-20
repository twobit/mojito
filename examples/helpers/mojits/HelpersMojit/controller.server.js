/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HelpersMojit', function(Y, NAME) {

/**
 * The HelpersMojit module.
 *
 * @module HelpersMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.helpers.set('test', function(loc) {
                return ac.http.getRequest().url;
            });

            ac.models.get('HelpersMojitModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-http-addon', 'mojito-helpers-addon', 'HelpersMojitModelFoo']});
