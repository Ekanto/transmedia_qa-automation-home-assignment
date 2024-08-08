import { resolve } from "bluebird";

describe("Create List and delete created list", () => {
  let boardID;
  let listID;
  it("Create Board", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/boards",
      body: {
        name: "Test Board101",
      },
    })
      .its("body")
      .then((body) => {
        boardID = body.id;
      });
  });

  it("Create List", () => {
    cy.request({
      method: "POST",
      url: `http://localhost:3000/api/lists`,
      body: {
        name: "Test List 101",
        boardId: boardID,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      listID = response.body.id;
    });
  });

  it("Delete List", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3000/api/lists/${listID}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
