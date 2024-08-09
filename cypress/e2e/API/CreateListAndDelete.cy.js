describe("Create List and delete created list using API", () => {
  let boardID;
  let listID;
  it("Create Board", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/boards",
      body: {
        name: "API Board",
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
        name: "API List",
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
