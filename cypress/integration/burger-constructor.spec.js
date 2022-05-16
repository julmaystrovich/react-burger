describe('stellar burger is available', function() {
    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
    });

    it('drag and drop ingredients', () => {
        const dataTransfer = new DataTransfer();
        cy.get('[data-test="60d3b41abdacab0026a733c7"]').trigger('dragstart', { dataTransfer });
        cy.get('[data-test="constructor"]').trigger('drop', { dataTransfer });
        cy.get('[data-test="60d3b41abdacab0026a733ce"]').trigger('dragstart', { dataTransfer });
        cy.get('[data-test="constructor"]').trigger('drop', { dataTransfer });
        cy.get('[data-test="60d3b41abdacab0026a733c9"]').trigger('dragstart', { dataTransfer });
        cy.get('[data-test="constructor"]').trigger('drop', { dataTransfer });
    });

    it('open and close ingredients modal', () => {
        cy.get('[data-test="60d3b41abdacab0026a733c9"]').click();
        cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c9');
        cy.get('[data-test="modal"]').should('exist');
        cy.get('[data-test="modal-header"]').find('svg').click();
        cy.get('[data-test="modal"]').should('not.exist');
    });

    it('login', () => {
        cy.contains('Оформить заказ').should('be.enabled').click();
        cy.location('pathname').should('eq', '/login');
        cy.get('[data-test="input-container"] .input_type_email').find('svg').click().type('chernikovajul@yandex.ru');
        cy.get('input[type=password]').click().type('coffee');
        cy.contains('Войти').click();
    });

    it('make order and open order modal', () => {
        cy.location('pathname').should('eq', '/');
        cy.contains('Оформить заказ').should('be.enabled').click();
        cy.get('[data-test="modal"]', { timeout: 20000 }).should('exist');
    });

    it('close modal', () => {
        cy.get('[data-test="modal-header"]').find('svg').click();
        cy.get('[data-test="modal"]').should('not.exist');
    });
  }); 
