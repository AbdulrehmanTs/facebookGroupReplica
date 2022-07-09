import express from 'express'
import cors from 'cors'
import { users } from './data.js'

const app = express()
const port = 5000


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let newUsers = []



app.get("/", (req, res) => {

    res.send("Welcome...!")
})


app.post("/register", (req, res) => {
    const { firstName, lastName, email, password } = req.body
    let user = {}
    let errorMessage = ''
    users.map((item) => {
        if (item.email == email) {
            errorMessage = "User already exist."
        } else {
            newUsers.push(req.body)
        }
    })
    res.send([req.body, errorMessage])
})


app.post('/login', (req, res) => {
    const { email } = req.body.values
    let errorMessage = {}
    let user = {}
    users.find((item) => {
        if (item.email = email) {
            user = item
        } else {
            errorMessage = "Not Found."
        }
    })
    console.log(email)
    res.send([user, errorMessage])
})



app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})