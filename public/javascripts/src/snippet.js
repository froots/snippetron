var Snippet = {
  Model: Backbone.Model.extend({
    urlRoot: "/"
  }),

  Views: {
    Form: Backbone.View.extend({
      tagName: "form",
      className: "create-snippet",

      events: {
        "submit": "create"
      },

      render: function() {
        this.el.innerHTML = '<div class="message" style="display:none"></div>' +
          '<div class="row">' +
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
          "title": this.$("[name='title']").val(),
          "content": this.$("[name='content']").val()
        }, {
          "success": _.bind(this.onCreateSuccess, this)
        });
      },

      onCreateSuccess: function(model, response) {
        this.showMessage("Snippet '" + model.get('title') + "' saved!");
      },

      showMessage: function(message) {
        this.$(".message").text(message).show();
      }
    })
  }
};