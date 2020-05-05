describe("navigation", () => {
    it("should display the about page", () => {
        cy.visit("/");

        cy.get("[data-cy='nav-link-about']")
            .click();
        
        cy.url()
            .should("contain", "about");
    });
})