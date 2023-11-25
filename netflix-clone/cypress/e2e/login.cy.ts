describe("Test Login Page", () => {
  it("Login Page success", () => {
    cy.visit("/");
    cy.contains("Iniciar Sesión");

    cy.get("input[type=email]").type("linder340@gmail.com");
    cy.get("input[type=password]").type("linder1234");
    cy.get("button[type=submit]").click();

    cy.contains("Ingresando...");
    cy.contains("¿Quién está viendo ahora?");
    cy.wait(2000);
    cy.get("button").contains("Administrar perfiles").click();
    cy.get("input[type=text]").type("linder340");
    cy.get("button[type=submit]").click();

    cy.get("a").first().click();
  });
});
