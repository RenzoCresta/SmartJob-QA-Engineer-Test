import tc1 from '../fixtures/tc1.json';
class TC1 {
  fill_form() {
    it('Cotizacion_01 - Correos electrónicos descartables restringidos', () => {
      cy.visit('https://seguros.tanner.cl/vida/cotizar')
      cy.get('#fb-input-4')
        .type(tc1[0]);
      cy.get('#fb-input-5')
        .type(tc1[1]);
      cy.get('#fb-input-6')
        .type(tc1[2]);
      cy.get('#fb-datepicker-7')
        .click()
        .get('.vdp-datepicker__calendar')
        .contains('2001')
        .click()
        .get('.vdp-datepicker__calendar')
        .contains('Enero')
        .click()
        .get('.vdp-datepicker__calendar')
        .contains('19')
        .click();
      cy.get('#fb-input-13')
        .type(tc1[3]);
      cy.get('#fb-input-14')
        .type(tc1[4]);
      cy.get('#fb-input-15')
        .type(tc1[5]);
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

module.exports = new TC1();