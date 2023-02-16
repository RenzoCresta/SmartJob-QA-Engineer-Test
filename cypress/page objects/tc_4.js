import tc4 from '../fixtures/tc4.json';
class TC4 {
  fill_form() {
    it('Cotizacion_04 - Declaración de salud coincidente con fecha de nacimiento', () => {
      cy.visit('https://seguros.tanner.cl/vida/cotizar')
      cy.get('#fb-input-4')
        .type(tc4[0]);
      cy.get('#fb-input-5')
        .type(tc4[1]);
      cy.get('#fb-input-6')
        .type(tc4[2]);
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
        .type(tc4[3]);
      cy.get('#fb-input-14')
        .type(tc4[4]);
      cy.get('#fb-input-15')
        .type(tc4[5]);
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

module.exports = new TC4();