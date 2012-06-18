var Snippet = {
  Model: Backbone.Model.extend(),

  Views: {
    Form: Backbone.View.extend({
      tagName: "form",

      events: {
        "submit": "create"
      },

      render: function() {
        this.el.innerHTML = '<div class="row">' +
            '<label for="title">Snippet title</label>' +
            '<input type="text" name="title" id="title">' +
          '</div>' +
          '<div class="row">' +
            '<label for="content">Snippet content</label>' +
            '<textarea cols="80" rows="10" id="content" name="content"></textarea>' +
          '</div>' +
          '<input type="submit" value="Create snippet">';
        return this;
      },

      create: function(ev) {
        ev.preventDefault();
        this.model = new Snippet.Model();
        this.model.save({
          "title": this.$el.serialize()
        });
      }
    })
  }
};