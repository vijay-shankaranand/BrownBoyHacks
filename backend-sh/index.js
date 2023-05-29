const express = require("express");
const cors = require("cors");
const bodyParser = require("body parser");


const { Configuration , OpenAIApi } = require("openai");

const config = new Configuration({ 
    apiKey: "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"
})

const openai = new OpenAIApi(config);


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.response("/chat", async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 1000,
        temperature: 1,
        prompt: prompt
    })

    res.send(completion.data.choices[0].text);
})

const port = 8080;
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
})