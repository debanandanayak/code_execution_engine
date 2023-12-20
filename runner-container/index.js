const { getData } = require('./db-operations')
const runCode = require('./runner')

async function createFiles(key) {

    const data = await getData(key)
    const id = `${data.id}`
    const fileName = `${data.id}`
    const code = data.code
    const ext = data.extension
    const input = data.input
    const compiler = data.compiler

    const filePath = `${fileName}${ext}`
    await fs.writeFile(filePath, code)
    await fs.writeFile(`${fileName}.txt`, input)

    try {
        let result = await runCode(`sh script.sh ${compiler} ${filePath} ${fileName}.txt`)
        await db.addToRedis(id, { id: id, output: result.stdout, error: result.stderr, isCompleted: true })
        console.log(result)
    } catch (error) {
        console.log("Error while running", error)
    } finally {
        await channel.ack(message)
    }
}