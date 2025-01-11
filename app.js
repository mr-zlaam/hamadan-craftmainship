import express from "express"

const app = express()

app.use(express.static("static"))
app.listen(4551, () => {
  console.log("listening on port http://localhost:4551")
})
