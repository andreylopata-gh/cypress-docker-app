describe('home testings', () => {
  const targetUrl = '/';
  const boxesPath = '.boxs-container';
  const boxPath = '.boxs-container div[role="button"]';

  it('home page loading', () => {
    cy.visit(targetUrl);
    cy.url().should('include', targetUrl);

    cy.get(boxesPath).should('be.visible');
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
//   it('checking widget', () => {
//     cy.get('.header-tab-wrapper .header-marker').should('be.visible');
//   });
//
//   it('checking logo', () => {
//     cy.get('.header-tab-wrapper .header-logo .logo').should('be.visible');
//   });
});

export {};
