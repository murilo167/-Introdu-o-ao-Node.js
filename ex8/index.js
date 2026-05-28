const http = require('http');

const servidor = http.createServer((req, res) => {

    const horaAtual = new Date().toLocaleString('pt-BR');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/') {

        res.end(`
            <html>
            <head>
                <title>Início</title>

                <style>

                    body{
                        background:#0f172a;
                        color:white;
                        font-family:Arial;
                        text-align:center;
                        padding:40px;
                    }

                    nav a{
                        color:#38bdf8;
                        margin:10px;
                        text-decoration:none;
                        font-weight:bold;
                    }

                </style>

            </head>

            <body>

                <h1>🏠 Página Inicial</h1>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <p>Bem-vindo ao servidor Node.js!</p>

                <p>Horário atual: ${horaAtual}</p>

            </body>
            </html>
        `);

    }

    else if(req.url === '/sobre'){

        res.end(`
            <html>
            <head>

                <title>Sobre</title>

                <style>

                    body{
                        background:#111827;
                        color:white;
                        font-family:Arial;
                        text-align:center;
                        padding:40px;
                    }

                    nav a{
                        color:#22c55e;
                        margin:10px;
                        text-decoration:none;
                        font-weight:bold;
                    }

                </style>

            </head>

            <body>

                <h1>📘 Sobre o Aluno</h1>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <p>Nome: Vitor Chagas da Silva</p>
                <p>Curso: Programação Websites I</p>

                <p>Horário atual: ${horaAtual}</p>

            </body>
            </html>
        `);

    }

    else if(req.url === '/contato'){

        res.end(`
            <html>
            <head>

                <title>Contato</title>

                <style>

                    body{
                        background:#1e293b;
                        color:white;
                        font-family:Arial;
                        text-align:center;
                        padding:40px;
                    }

                    nav a{
                        color:#facc15;
                        margin:10px;
                        text-decoration:none;
                        font-weight:bold;
                    }

                </style>

            </head>

            <body>

                <h1>📞 Contato</h1>

                <nav>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </nav>

                <p>Email: vitorchagasdasilva623@gmail.com</p>
                <p>WhatsApp: +55 51 9837-3901</p>

                <p>Horário atual: ${horaAtual}</p>

            </body>
            </html>
        `);

    }

    else{

        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end('<h1>Página não encontrada</h1>');

    }

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});