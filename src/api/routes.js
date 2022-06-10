const { bodyParse } = require('./schemas')
const controller = require('./controller')

module.exports = app => {
    app.post('/brackets-balance', async (req, res) => {
        const { body: parameters } = req
        const { error } = bodyParse.validate(parameters)

        if (error) {
            return res.status(400).json({
                message: 'Bad Request',
            })
        }

        const { code } = parameters
        const balance = await controller.doBracketsBalance(code)

        res.json({
            balance
        })
    })
}
