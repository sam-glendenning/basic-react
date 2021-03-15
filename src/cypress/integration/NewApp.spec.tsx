export { };

describe("NewApp", () => {
	it("renders correct text in a header", () => {
		cy.visit("http://localhost:3000");
		cy.get("h2").should("have.text", "Here's another heading!");
	});

	it("renders the second paragraph", () => {
		cy.visit("http://localhost:3000");
		cy.get("[id=final]").should("have.text", "Here is a final paragraph.");
	});
});
