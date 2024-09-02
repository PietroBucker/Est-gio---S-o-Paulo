const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let sum = 0;

for (key in faturamentoMensal) {
    sum += faturamentoMensal[key];
}

for (key in faturamentoMensal) {
    console.log(`O valor percentual de representaçao de ${key} é ${(faturamentoMensal[key] / sum * 100).toFixed(2)}%`);
    
}


