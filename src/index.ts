import express from 'express'
import diaryRouter from './routes/diary.routes'

const app = express()
app.use(express.json())

const PORT = 3002

app.get('/ping', (_, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
