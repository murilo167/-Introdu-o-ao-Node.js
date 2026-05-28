const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
        rl.question('Digite sua cidade: ', (cidade) => {
            rl.question('Digite seu curso: ', (curso) => {
                rl.question('Digite sua profissão desejada: ', (profissaoDesejada) => {
                    console.log('\n=== DADOS INFORMADOS ===');
                    console.log('Nome: ' + nome);
                    console.log('Idade: ' + idade);
                    console.log('Cidade: ' + cidade);
                    console.log('Curso: ' + curso);
                    console.log('Profissão Desejada: ' + profissaoDesejada);

                    rl.close();
                });
            });
        });
    });
});
