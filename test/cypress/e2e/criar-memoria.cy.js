// Configura ojson com a massa de dados
// Passar a função o nome do aquivo de teste
const FILE_NAME = "teste-xls-cypress";
const URL = "http://localhost:4200/listarPensamento";
let massa;

describe("Teste utilizando massa de dados vindos de um arquivo xlsx", () => {
    before(() => {
        cy.task("readXlsx", { fileName: FILE_NAME, target: 6 }).then((data) => {
            massa = data;
        });
    });

    beforeEach(() => {
        cy.visit(URL);
        cy.networkWait();
    });

    it("Criando uma nova memória", () => {
        cy.findAllByText(/^Adicionar pensamento/i).first().click();
        cy.findByPlaceholderText(/^Digite o pensamento/i).type(String(massa.Pensamento));
        cy.findByPlaceholderText(/^Digite o autoria oufonte/i).type(String(massa.Autor));
        cy.scrollTo("bottom");
        cy.findAllByText(massa.Modelo).first().click();
        cy.findAllByText(/^Salvar/i).first().click();
        cy.findAllByText(/^Cypress/i).should("be.visible");
    });
});