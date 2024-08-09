import CreateBoard from "./CreateBoard";
import URL from "../Resources/URL";

class CreateList {
  URL = URL.url;
  createList = '[data-cy="board-item"]';

  GetUrl() {
    return cy.visit(this.URL);
  }

  SelectBoard() {
    return cy.get(this.createList).contains(CreateBoard.boardName).click();
  }

  AddListInput() {
    return cy
      .get('[data-cy="add-list-input"]')
      .type("This is test List")
      .type("{enter}");
  }
}
export default CreateList;
