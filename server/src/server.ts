import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json(['Rudolf', 'Kelly', 'Mel', 'Mozart']);
});

app.listen(3333);
