/* variaveis simbolizando os petshops */
let meuCaninoFeliz = {
    distanicia: 2,
    caesPeq: 20,
    caesGra: 40,
    aumentoPorc: 1.2
}

let vaiRex = {
    distanicia: 1.7,
    caesPeq: 15,
    caesGra: 50,
    aumento: 5
}

let chowChawgas = {
    distanicia: 0.8,
    caesPeq: 30,
    caesGra: 45,
    aumento: 0
}

/* entrada dos valores */
const entr = prompt('Insira data no formato DD/MM/AAAA e as quantidades de cachorros pequenos e grandes:');

if (entr == '' || entr == null) {
    console.log('Nenhum valor foi colocado');
} else {
    let valores = entr.split(' ');

    /* recebe a data no formato DD/MM/AAAA e cria uma variavel do tipo Date */
    let dataV = valores[0].split('/');
    let data = new Date(dataV[2], (dataV[1]-1), dataV[0]);

    /* verfica se eh fim de semana */
    let fimDeSemana = data.getDay() % 6 == 0 ? true : false;

    /* define 0 para quantidade de cachorros caso nao seja definido*/
    let qtdCP = valores[1] == undefined ? 0 : valores[1];
    let qtdCG = valores[2] == undefined ? 0 : valores[2];

    /* calcula os precos dos petshops */
    let precoMCF = 0;
    let precoVR = 0;
    let precoCC = chowChawgas.caesGra * qtdCG + chowChawgas.caesPeq * qtdCP;

    if (fimDeSemana) {
        precoMCF = meuCaninoFeliz.aumentoPorc * (meuCaninoFeliz.caesGra * qtdCG + meuCaninoFeliz.caesPeq * qtdCP);
        precoVR = (vaiRex.caesGra + vaiRex.aumento) * qtdCG + (vaiRex.caesPeq + vaiRex.aumento) * qtdCP;
    } else {
        precoMCF = meuCaninoFeliz.caesGra * qtdCG + meuCaninoFeliz.caesPeq * qtdCP;
        precoVR = vaiRex.caesGra * qtdCG + vaiRex.caesPeq * qtdCP;
    }

    /* compara precos exibe resultado final */
    console.log('Para o dia ' + valores[0] + ' e ' + qtdCP + ' e ' + qtdCG + ' cachorros pequenos e grandes:');
    if (precoMCF < precoVR && precoMCF < precoCC) {       
        console.log('O melhor petshop é Meu Canino Feliz e o preço é R$ ' + precoMCF);
    } else if (precoVR < precoCC && precoVR < precoMCF) {
        console.log('O melhor petshop é Vai Rex e o preço é R$ ' + precoVR);
    } else {
        console.log('O melhor petshop é Chow Chawgas e o preço é R$ ' + precoCC);
    }
}