describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render App", function () {
    cy.screenshot("index");
  });
  it("should contain Hello World", function () {
    cy.contains("Hello World");
  });
});
