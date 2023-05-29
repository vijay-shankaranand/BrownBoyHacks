const express = require("express");
const cors = require("cors");
const bodyParser = require("body parser");


const { Configuration , OpenAIApi } = require("openai");

const config = new Configuration({ 
    apiKey: ""
})

const openai = new OpenAIApi(config);


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.response("/chat", async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        location: "",
        max_tokens: "",
        time: "",
        prompt: ""
    })

    res.send(completion.data.choices[0].text);
})

const port = 8080;
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
})