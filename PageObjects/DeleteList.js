import CreateBoard from "./CreateBoard";
import URL from "../Resources/URL";

class DeleteList {
  URL = URL.url;

  GetUrl() {
    return cy.visit(this.URL);
  }

  SelectBoard() {
    return cy
      .get('[data-cy="board-item"]')
      .contains(CreateBoard.boardName)
      .click();
  }

  SelectListOptions() {
    return cy.get('[data-cy="list-options"]').eq(1).click();
  }

  DeleteList() {
    return cy.get('[data-cy="delete-list"]').click();
  }
}
export default DeleteList;
