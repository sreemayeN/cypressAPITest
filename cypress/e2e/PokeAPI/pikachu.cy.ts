describe('PokeAPI Tests', () => {
    it('should fetch data of a specific Pokémon', () => {
      // give endpoint - pokemon/pikachu
      cy.request("GET", "/pokemon/pikachu").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'pikachu');
        expect(response.body).to.have.property('id', 25);
      });
    });

    it('should fetch data of a specific berry', () => {
      // give endpoint - berry
      cy.request("GET", "/berry/1").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'cheri');
        expect(response.body).to.have.property('id', 1);
        expect(response.body.flavors[0]).to.have.property('potency', 10);
        expect(response.body.flavors[0].flavor).to.have.property('name', 'spicy');
        expect(response.body.firmness).to.have.property('name', 'soft');
      });
      
    });
  }); 