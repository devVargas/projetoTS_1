import { Negociacao } from "./negociacao.js";

export class Negociacaoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    list(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}