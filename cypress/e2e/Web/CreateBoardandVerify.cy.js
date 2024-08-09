import CreateBoard from "../../../PageObjects/CreateBoard.js";


describe("Create board and verify", () => {
  it("Create board and verify", () => {
    const cb = new CreateBoard();
    cb.GetURL();
    cb.SelectBoard().click();
    cb.NewBoardInput();
    cb.CreateNewBoard();
    cb.VerifyBoardCreated();
  
  });
});
