import express, { urlencoded } from 'express'
import  {connection} from './DB/connection.js'
import userRouter from './src/user/user.router.js'
import noteRouter from './src/note/note.router.js'


const app = express()
const port = 3000

app.use(express.json())
connection()
app.use('/users',userRouter)
app.use('/notes',noteRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))