import CreateBoard from "../../PageObjects/CreateBoard.js";

describe("test", () => {
  it("test", () => {
    const cb = new CreateBoard();
    cb.getURL();
    cb.CreateBoard().click();
    cb.NewBoardInput();
    cb.CreateNewBoard();
    cb.VerifyBoardCreated()
  });
});
