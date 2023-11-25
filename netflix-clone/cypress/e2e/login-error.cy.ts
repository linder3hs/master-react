describe("Login errors", () => {
  it("Inputs validation", () => {
    cy.visit("/");

    cy.get("input[type='email']").focus().blur();
    cy.contains("Ingresa un email o un número de teléfono válido.");
    cy.get("input[type='password']").focus().blur();

    cy.contains("La contraseña debe tener entre 4 y 60 caracteres.");

    cy.get("button[type='submit']").click();
  });

  it("Login intercept error", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/api/auth",
      },
      {
        statusCode: 500,
        body: {
          ok: false,
          body: "Invalid credentials",
        },
      }
    ).as("Login");

    cy.visit("/");

    cy.get("input[type=email]").type("linder340@gmail.com");
    cy.get("input[type=password]").type("linder1234");
    cy.get("button[type=submit]").click();

    cy.contains("Invalid credentials")
  });
});
