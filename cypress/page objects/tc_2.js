import tc2 from '../fixtures/tc2.json';
class TC2 {
  fill_form() {
    it('Cotizacion_02 - RUT debe ser número de nueve dígitos', () => {
      cy.visit('https://seguros.tanner.cl/vida/cotizar')
      cy.get('#fb-input-4')
        .type(tc2[0]);
      cy.get('#fb-input-5')
        .type(tc2[1]);
      cy.get('#fb-input-6')
        .type(tc2[2]);
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
        .type(tc2[3]);
      cy.get('#fb-input-14')
        .type(tc2[4]);
      cy.get('#fb-input-15')
        .type(tc2[5]);
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

module.exports = new TC2();