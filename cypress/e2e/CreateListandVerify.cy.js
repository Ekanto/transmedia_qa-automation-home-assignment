import CreateList from "../../PageObjects/CreateList.js";

describe("Create List and Verify", () => {
  it("Create two lists and Verify", () => {
    const createList = new CreateList();
    createList.GetUrl();
    createList.SelectBoard();
    for (let i = 0; i < 2; i++) {
      createList.AddListInput();
    }
    cy.get('[data-cy="board-detail"] > :nth-child(2) > :nth-child(1)').should(
      "be.visible"
    );
    cy.get('[data-cy="board-detail"] > :nth-child(2) > :nth-child(2)').should(
      "be.visible"
    );
  });
});
