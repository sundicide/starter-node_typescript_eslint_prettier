import express, { Request, Response } from 'express'

// Create Express server
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

const port = 4501

const server = app.listen(port, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    port,
    app.get('env'),
  )
  console.log('  Press CTRL-C to stop\n')
})

export default server
