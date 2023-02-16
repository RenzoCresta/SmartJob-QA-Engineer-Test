import tc3 from '../fixtures/tc3.json';
class TC3 {
    fill_form() {
        it('Cotizacion_03 - Edad del solicitante no superior a los 110 años', () => {
            cy.visit('https://seguros.tanner.cl/vida/cotizar')
            cy.get('#fb-input-4')
                .type(tc3[0]);
            cy.get('#fb-input-5')
                .type(tc3[1]);
            cy.get('#fb-input-6')
                .type(tc3[2]);
            cy.get('#fb-datepicker-7')
                .click()
            for (let i = 0; i < 20; i++) {
                cy.get('.prev').each(($el) => {
                    cy.wrap($el).click({ force: true });
                });
            };
            cy.get('.vdp-datepicker__calendar')
            .contains('1785')
            .click()
            .get('.vdp-datepicker__calendar')
            .contains('Enero')
            .click()
            .get('.vdp-datepicker__calendar')
            .contains('19')
            .click();
          cy.get('#fb-input-13')
            .type(tc3[3]);
          cy.get('#fb-input-14')
            .type(tc3[4]);
          cy.get('#fb-input-15')
            .type(tc3[5]);
          cy.get('button')
            .contains('Continuar')
            .click();
          cy.get('#radio-id-undefined')
            .click({ force: true });
          cy.get('[name="id1"][value="1"]')
            .click({ force: true });
          cy.get('button')
            .contains('Ver precios')
            .click();
          cy.location().should((loc) => {
            expect(loc.pathname).to.eq('https://seguros.tanner.cl/vida/cotizar');
          });
        })
    }
}

module.exports = new TC3();