import ListNameGenerator from "../Resources/ListNameGenerator";
import URL from "../Resources/URL";
class CreateBoard {
  static boardName = ListNameGenerator.generate();
  URL = URL.url;
  selectBoard = '[data-cy="create-board"]';
  inputBoardName = '[data-cy="new-board-input"]';
  newBoardCreate = '[data-cy="new-board-create"]';
  verifyBoard = '[data-cy="add-list-input"]';

  GetURL() {
    return cy.visit(this.URL);
  }
  SelectBoard() {
    return cy.get(this.selectBoard);
  }
  NewBoardInput() {
    return cy.get(this.inputBoardName).type(this.constructor.boardName);
  }
  CreateNewBoard() {
    return cy.get(this.newBoardCreate).click();
  }
  VerifyBoardCreated() {
    return cy.get(this.verifyBoard).should("be.visible");
  }
}
export default CreateBoard;
