import { ListNameGenerator } from "../Resources/ListNameGenerator";


class CreateList {
  URL = "http://localhost:3000/";
  createList = '[data-cy="board-item"]';

  GetUrl() {
    return cy.visit(this.URL);
  }

  SelectBoard() {
    return cy.get(this.createList).contains('Test Board 15').click();
  }

  AddListInput(){
    return cy.get('[data-cy="add-list-input"]').type("This is test List").type("{enter}");
  }

  
}
export default CreateList;
