class DeleteList {
  URL = "http://localhost:3000/";

  GetUrl() {
    return cy.visit(this.URL);
  }

  SelectBoard() {
    return cy.get('[data-cy="board-item"]').contains("Test 11 Board").click();
  }

  SelectListOptions() {
    return cy.get('[data-cy="list-options"]').eq(1).click();
  }

  DeleteList() {
    return cy.get('[data-cy="delete-list"]').click();
  }
}
export default DeleteList;
