import DeleteList from "../../PageObjects/DeleteList";

describe("Delete list", () =>{
    it("Delete the last created list and verify", () => {
        const deleteList = new DeleteList();
        deleteList.GetUrl();
        deleteList.SelectBoard();
        deleteList.SelectListOptions();
        deleteList.DeleteList();
        cy.get('[data-cy="board-detail"] > :nth-child(2) > :nth-child(2)').should(
          "not.exist"
        );
      });
})