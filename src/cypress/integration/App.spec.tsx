export { };

describe("App", () => {
	it("renders correct text in a header", () => {
		cy.visit("http://localhost:3000");
		cy.get("h1").should("have.text", "Hello, Sam!");
	});

	it("renders the first paragraph", () => {
		cy.visit("http://localhost:3000");
		cy.get("[id=welcome]").should("have.text", "Welcome to my React app.");
	});
});
