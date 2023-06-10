const anchorFor200StatusCode = "#200siteAnchor";
const anchorFor305StatusCode = "#305siteAnchor";
const anchorFor404StatusCode = "#404siteAnchor";
const anchorFor500StatusCode = "#500siteAnchor";

class StatusCodesPage {
  testStatusCode200() {
    cy.get(anchorFor200StatusCode)
      .invoke("attr", "href")
      .then((href) => {
        cy.request(href).then((response) => {
          const body = response.body;
          expect(response.status).to.eq(200);
          expect(body).to.contain("200 OK");
        });
      });
  }

  testStatusCode305() {
    cy.get(anchorFor305StatusCode)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          followRedirect: false,
        }).then((response) => {
          const body = response.body;
          expect(response.status).to.eq(305);
          expect(body).to.contain("305 Use Proxy");
        });
      });
  }

  testStatusCode404() {
    cy.get(anchorFor404StatusCode)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          const body = response.body;
          expect(response.status).to.eq(404);
          expect(body).to.contain("404 Not Found");
        });
      });
  }

  testStatusCode500() {
    cy.get(anchorFor500StatusCode)
      .invoke("attr", "href")
      .then((href) => {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          const body = response.body;
          expect(response.status).to.eq(500);
          expect(body).to.contain("500 Internal Server Error");
        });
      });
  }
}

export default StatusCodesPage;
