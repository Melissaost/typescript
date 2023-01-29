import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];
    //Negociacao[] é igual a Array<Negociacao>

    adiciona( negociacao : Negociacao){
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray<Negociacao> é igual a readonly Negociacao[]
    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}