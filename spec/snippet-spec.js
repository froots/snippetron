buster.spec.expose();

describe("Snippet module", function() {
  describe("Form View", function() {
    beforeEach(function() {
      this.subject = new Snippet.Views.Form();
    });

    describe("when rendered", function() {
      beforeEach(function() {
        this.subject.render();
      });

      it("is a form tag", function() {
        expect(this.subject.el.nodeName.toLowerCase()).toEqual("form");
      });

      it("creates a title text field", function() {
        expect(this.subject.$("input[name='title']").length).toEqual(1);
      });

      it("creates a content text area", function() {
        expect(this.subject.$("textarea[name='content']").length).toEqual(1);
      });
    });
  });
});