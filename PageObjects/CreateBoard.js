class CreateBoard {
  URL = "http://localhost:3000/";
  selectBoard = '[data-cy="create-board"]';
  inputBoardName = '[data-cy="new-board-input"]';
  newBoardCreate = '[data-cy="new-board-create"]';
  verifyBoard = '[data-cy="add-list-input"]'

  GetURL() {
    return cy.visit(this.URL);
  }
  CreateBoard() {
    return cy.get(this.selectBoard);
  }
  NewBoardInput() {
    return cy.get(this.inputBoardName).type("Test 10 Board");
  }
  CreateNewBoard(){
    return cy.get(this.newBoardCreate).click();
  }
  VerifyBoardCreated(){
    return cy.get(this.verifyBoard).should('be.visible');

  }

}
export default CreateBoard;
