describe('REQRESAPI Tests', () => {
    it('Put request', () => {
      const filePath = 'cypress/downloads/response.json';
          cy.request({method: 'PUT',
        url:'baseUrl/2', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       body: {
            "data":[
            {"id":21,
            "email":"george.bluth@reqres.in",
            "first_name":"George Georgie Elizabeth",
            "last_name":"Bluth Booth",
            "avatar":"https://reqres.in/img/faces/1-image.jpg"}]
      }
     
     }) .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data[0]).to.have.property('first_name', 'George Georgie Elizabeth');
        expect(response.body.data[0]).to.have.property('id', 21);
        expect(response.body).to.not.be.null;
        cy.writeFile(filePath, response.body);
      });
    });
    it('Get request', () => {
      const filePath = 'cypress/downloads/response.json';
      const apiUrl = 'https://reqres.in/api/users'
      const queryParams = {
        page: '1',
        per_page: '12',
      };
      
      cy.request({method: 'GET',
       // url:'https://reqres.in/api/users', 
        url:apiUrl,
        qs: queryParams,
          
     
     }) .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        cy.writeFile(filePath, response.body);
      });
    });

    it('GET request for reqres', () => {
      
      cy.request("GET", "users/").then((response) => {
        const filePath = 'cypress/downloads/response1.json';
        expect(response.status).to.eq(200);
        cy.writeFile(filePath, response.body);
        //expect(response.body).to.have.property('name', 'cheri');
        //expect(response.body).to.have.property('id', 1);
        //expect(response.body.flavors[0]).to.have.property('potency', 10);
        //expect(response.body.flavors[0].flavor).to.have.property('name', 'spicy');
        //expect(response.body.firmness).to.have.property('name', 'soft');
      });
      
    });
      
  }); 