export class View {
    elemento;
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique se o seletor está correto.`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
