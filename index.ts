import express,{Request,Response} from "express"
const PORT: number=  parseInt(process.env.PORT  || "5050",10)

const app = express()

app.get('/', (req:Request, res:Response) => {
    return res.status(200).json({ message:"Ok server is online."})
})

app.listen(() => {
    console.log(`Server listening on ${PORT}`)
})
