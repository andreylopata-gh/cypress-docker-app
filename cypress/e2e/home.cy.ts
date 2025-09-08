describe('home testings', () => {
  const targetUrl = '/';
  const wrongBoxesPath = '.boxs-container22222';
  const boxPath = '.boxs-container div[role="button"]';
// add some comment
  it('home page loading', () => {
    cy.visit(targetUrl); // test text
    cy.url().should('include', targetUrl);
    console.log("Test text");
    cy.get(wrongBoxesPath).should('be.visible');
  });

//   it('checking icons existing and boxes is a links', () => {
//     cy.log('link');
//     cy.get(`${boxPath} a`).should('be.visible');
//
//     cy.log('icon');
//     cy.get(`${boxPath} img`).should('be.visible');
//
//     cy.log('box is link');
//     cy.get(`${boxPath} a`).each((page) => {
//       cy.request(page.prop('href'));
//     });
//   });
//
  it('checking widget', () => {
    cy.visit(targetUrl);
    cy.get('.header-tab-wrapper .header-marker').should('be.visible');
  });

});

export {};
