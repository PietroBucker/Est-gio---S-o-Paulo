const FaturamentoDiario = require('./03.json');

function faturamento(FaturamentoDiario) {
    const arrayFaturamento = FaturamentoDiario.filter(item => item.valor > 0)
        .map(item => item.valor);
    const mediaFaturamento = arrayFaturamento.reduce((acc, item) => acc + item, 0) / arrayFaturamento.length;

    const maiorFaturamento = Math.max(...arrayFaturamento);
    const menorFaturamento = Math.min(...arrayFaturamento);

    const qtdDiasMelhoFaturamento = arrayFaturamento.filter(item => item > mediaFaturamento);
    
    return `
    Maior faturamento: ${maiorFaturamento} no dia ${FaturamentoDiario.find(item => item.valor === maiorFaturamento).dia}
    Menor faturamento: ${menorFaturamento} no dia ${FaturamentoDiario.find(item => item.valor === menorFaturamento).dia}
    Média faturamento: ${mediaFaturamento}
    Dias com faturamento acima da média: ${qtdDiasMelhoFaturamento.length}`;
}

console.log(faturamento(FaturamentoDiario));