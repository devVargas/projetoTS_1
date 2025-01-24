export abstract class View<T> {
    protected elemento: HTMLElement;
    
    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique se o seletor está correto.`);
        }
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}