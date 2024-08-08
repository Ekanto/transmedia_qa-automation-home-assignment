import CreateList from "../../PageObjects/CreateList";

describe("Delete list", () =>{
    it("Delete the last created list and verify", () => {
        const createList = new CreateList();
        createList.GetUrl();
        createList.SelectBoard();
        createList.SelectListOptions();
        createList.DeleteList();
        cy.get('[data-cy="board-detail"] > :nth-child(2) > :nth-child(2)').should(
          "not.exist"
        );
      });
})