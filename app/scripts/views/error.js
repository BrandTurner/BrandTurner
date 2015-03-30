/*global BrandTurner, Backbone*/

BrandTurner.Views = BrandTurner.Views || {};

(function () {
  'use strict';

    BrandTurner.Views.Error = Backbone.View.extend({

    template: BrandTurner.Templates['error']
    , tagName: 'div'
    , className: 'view-error'
    /**
     *
     */
    , initialize: function (options) {
      _.bindAll(this, 'render');

      try {
        if(_.isUndefined(options.controller)){
          throw Error('The controller is a dependency. Please inject the controller into the view.');
        }
      } catch (e) {
        console.log(e);
      }

      this.controller = options.controller;
    }
    /**
     *
     */
    , render: function () {
      this.$el.html(this.template(this.model));
      return this;
    }

  });

})();