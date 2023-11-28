const express = require('express');
const cors = require('cors');
const { OpenAI } = require("openai");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/data', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Faça um resumo de até 6 linhas (importante) do livro/artigo : ${text}`
                }
            ],
            temperature: 0,
            max_tokens: 1024,
        });
        res.json({ resumo: response.choices[0].message.content });
    } catch (error) {
        console.error('Erro na API da OpenAI:', error);
        res.status(500).send('Erro ao processar a solicitação');
    }
});

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));