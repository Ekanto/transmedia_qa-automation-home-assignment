import CreateBoard from "../../PageObjects/CreateBoard.js";


describe("Create board and verify", () => {
  it("Create board and verify", () => {
    const cb = new CreateBoard();
    cb.GetURL();
    cb.CreateBoard().click();
    cb.NewBoardInput();
    cb.CreateNewBoard();
    cb.VerifyBoardCreated();
  
  });
});
