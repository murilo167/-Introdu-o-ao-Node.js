const fs = require('fs');

const mensagem = `
Meu primeiro arquivo criado com Node.js.
Data: ${new Date().toLocaleString('pt-BR')}
`;

fs.writeFileSync('meuArquivo.txt', mensagem);

console.log('Arquivo criado com sucesso!');

const conteudo = fs.readFileSync('meuArquivo.txt', 'utf8');

console.log('\n=== CONTEÚDO DO ARQUIVO ===');
console.log(conteudo);