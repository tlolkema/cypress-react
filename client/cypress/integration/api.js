describe("API Tests", () => {
  it("GET /name should be successful", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/name",
    })
      .its("body")
      .should("to.have.property", "name");
  });
});
