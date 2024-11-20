describe('REQRESAPI Tests', () => {
    it('PostRegister request', () => {
        const filePath = 'cypress/downloads/register.json';
          cy.request({method: 'POST',
           url:'/register', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       body: 
        {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
        }
     
     }) .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        cy.writeFile(filePath, response.body);
      });
    });

    it('PostRegister    Badrequest', () => {
        //const filePath = 'cypress/downloads/register.json';
          cy.request({method: 'POST',
            failOnStatusCode: false,
           url:'/register', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       body: 
        {
                "email": "eve.holt123445@reqres.in",
                "password": "pistol1"
        }
     
     }) .then((response) => {
        expect(response.status).to.eq(400);
          });
    });

    it('PostLogin request', () => {
        const filePath = 'cypress/downloads/login.json';
          cy.request({method: 'POST',
           url:'/login', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       body: 
        {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
        }
     
     }) .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        cy.writeFile(filePath, response.body);
      });
    });

    it('PostLogin Badrequest', () => {
         cy.request({method: 'POST',
         failOnStatusCode: false,
         url:'/login', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       body: 
        {
                "email": "eve.holt4564@reqres.in",
                "password": "pistol"
        }
     
     }) .then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.not.be.null;
      });
    });

    it('PostLogout request', () => {
        //const filePath = 'cypress/downloads/login.json';
          cy.request({method: 'POST',
           url:'/logout', 
         headers: {'Content-Type': 'application/json' // Set the Content-Type header
      },   
       
     
     }) .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        //cy.writeFile(filePath, response.body);
      });
    });

  }); 