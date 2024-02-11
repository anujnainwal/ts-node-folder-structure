import app from "./app";
const PORT: number=  parseInt(process.env.PORT  || "5050",10)


app.listen(() => {
    console.log(`Server listening on ${PORT}. \nServer url: ${process.env.BASE_URL}:${PORT}`)
})
