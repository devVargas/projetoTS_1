export class Negociacaoes {
    negociacoes = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
}
