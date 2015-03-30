/*global BrandTurner, Backbone*/

BrandTurner.Views = BrandTurner.Views || {};

(function () {
  'use strict';

    BrandTurner.Views.Modal = Backbone.View.extend({

    template: BrandTurner.Templates['modal']
    , tagName: 'div'
    , className: 'view-modal'
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
      this.$el.html(this.template());
      this.$('.modal-content').append((_.isObject(this.model.view) ? this.model.view.render().$el : this.model.view));
      return this;
    }

  });

})();
