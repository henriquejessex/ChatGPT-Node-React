const {Configuration, OpenAIApi} = require("openai")

module.exports = class OpenAI {
    static configuration(){
        const configuration = new Configuration({
            api_key: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration);
    }
    static textcompletion({prompt}){
        return {
            model: "gpt-3.5-turbo",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 4096,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }

    }
}

