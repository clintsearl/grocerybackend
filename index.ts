const fastify = require('fastify')({
    logger: true
})
fastify.register(require('./kroger.ts'))

fastify.get('/hello', async (req, res)=>{
    return({Hello: "world"})
})

const start = async()=>{
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
        
    } 
    }
    start()
