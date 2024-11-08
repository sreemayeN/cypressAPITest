describe('PokeAPI Tests', () => {
    it('should fetch data of a specific Pokémon', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'pikachu');
        expect(response.body).to.have.property('id', 25);
      });
    });
  });
  