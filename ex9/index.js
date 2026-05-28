const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    const dataHora = new Date().toLocaleString('pt-BR');

    const log = `
[${dataHora}] URL acessada: ${req.url}
`;

    fs.appendFileSync('log.txt', log);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if(req.url === '/'){

        res.end(`

            <html>

            <head>

                <title>Servidor Node</title>

                <style>

                    body{
                        background: linear-gradient(135deg, #0f172a, #1e3a8a);
                        color:white;
                        font-family:Segoe UI, Arial, sans-serif;
                        text-align:center;
                        padding:50px;
                        margin:0;
                        min-height:100vh;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }

                    .caixa{
                        background:rgba(255,255,255,0.08);
                        backdrop-filter: blur(10px);
                        padding:40px;
                        border-radius:20px;
                        width:420px;
                        margin:auto;
                        box-shadow:0 10px 30px rgba(0,0,0,0.4);
                        border:1px solid rgba(255,255,255,0.1);
                        transition:0.3s;
                    }

                    .caixa:hover{
                        transform:scale(1.02);
                    }

                    h1{
                        font-size:32px;
                        margin-bottom:20px;
                        color:#38bdf8;
                    }

                    p{
                        font-size:18px;
                        color:#e2e8f0;
                    }

                    h3{
                        background:#0f172a;
                        padding:12px;
                        border-radius:10px;
                        color:#22c55e;
                        margin-top:15px;
                    }

                </style>

            </head>

            <body>

                <div class="caixa">

                    <h1>🚀 Servidor Node.js</h1>

                    <p>Servidor funcionando com sucesso!</p>

                    <p>Data e hora:</p>

                    <h3>${dataHora}</h3>

                    <p>URL acessada: ${req.url}</p>

                </div>

            </body>

            </html>

        `);

    }

    else if(req.url === '/sobre'){

        res.end(`

            <html>

            <body style="
                background:linear-gradient(135deg,#111827,#1e40af);
                color:white;
                font-family:Segoe UI, Arial, sans-serif;
                text-align:center;
                padding:50px;
                margin:0;
                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
            ">

                <div style="
                    background:rgba(255,255,255,0.08);
                    padding:40px;
                    border-radius:20px;
                    width:420px;
                    box-shadow:0 10px 30px rgba(0,0,0,0.4);
                    border:1px solid rgba(255,255,255,0.1);
                ">

                    <h1 style="color:#60a5fa;">📘 Sobre</h1>

                    <p style="font-size:18px;">Página sobre o aluno.</p>

                    <p>Data e hora: ${dataHora}</p>

                    <p>URL acessada: ${req.url}</p>

                </div>

            </body>

            </html>

        `);

    }

    else{

        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end(`

            <html>

            <body style="
                background:linear-gradient(135deg,#450a0a,#991b1b);
                color:white;
                font-family:Segoe UI, Arial, sans-serif;
                text-align:center;
                padding:50px;
                margin:0;
                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
            ">

                <div style="
                    background:rgba(255,255,255,0.08);
                    padding:40px;
                    border-radius:20px;
                    width:420px;
                    box-shadow:0 10px 30px rgba(0,0,0,0.4);
                ">

                    <h1 style="font-size:36px;">❌ Página não encontrada</h1>

                    <p style="font-size:18px;">URL acessada: ${req.url}</p>

                </div>

            </body>

            </html>

        `);

    }

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});