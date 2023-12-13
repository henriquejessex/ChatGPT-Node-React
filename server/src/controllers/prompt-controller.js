const InputPrompt = require("../models/input-prompt")

const openai = require("../.config/openai")

modules.export = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openaiAPI
            .createCompletion(
                openai.textcompletion(inputModel)
            )
            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 
                "Erro ao se comunicar com a API da OpenAI"
            })
        }

    }
}