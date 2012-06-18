buster.spec.expose();

describe("Snippet module", function() {
  beforeEach(function() {
    this.formView = new Snippet.Views.Form();
  });

  describe("when rendered", function() {
    beforeEach(function() {
      this.formView.render();
    });

    it("is a form tag", function() {
      expect(this.formView.el.nodeName.toLowerCase()).toEqual("form");
    });

    it("creates a title text field", function() {
      expect(this.formView.$("input[name='title']").length).toEqual(1);
    });

    it("creates a content text area", function() {
      expect(this.formView.$("textarea[name='content']").length).toEqual(1);
    });
  });

  describe("when submitted", function() {
    beforeEach(function() {
      this.formView.render();
    });

    describe("with a completed form", function() {
      beforeEach(function() {
        this.server = sinon.fakeServer.create();

        this.formView.$("[name='title']").val("Alert example");
        this.formView.$("[name='content']").val("alert('An alert');");
        this.formView.$el.trigger("submit");
      });

      afterEach(function() {
        this.server.restore();
      });

      it("creates a Snippet model", function() {
        expect(this.formView.model).toBeDefined();
      });

      it("makes the correct POST request to the server", function() {
        var reqs = this.server.requests;
        expect(reqs.length).toEqual(1);
        expect(reqs[0].url).toEqual("/");
        var body = JSON.parse(reqs[0].requestBody);
        expect(body.title).toEqual("Alert example");
        expect(body.content).toEqual("alert('An alert');");
      });
    });
  });
});
