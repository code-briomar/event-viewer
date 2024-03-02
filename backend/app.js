import express from "express"
import { KEYS } from "./lib/config/keys.js"
import { events } from "./app/events/index.js"
import { IMAGE } from "./lib/imageControl.js"

const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is the events API. Send requests to /api/events to get events data")
})

app.get("/api/events", (req, res) => {
    res.status(200).json([
        {
            name: "Event 1",
            date: "2021-01-01",
            time: "12:00",
            location: "Location 1",
            description: "Description 1",
            image: IMAGE.image1
        },
        {
            name: "Event 2",
            date: "2021-02-02",
            time: "13:00",
            location: "Location 2",
            description: "Description 2",
            image: IMAGE.image1
        },
        {
            name: "Event 3",
            date: "2021-03-03",
            time: "14:00",
            location: "Location 3",
            description: "Description 3",
            image: IMAGE.image1
        }
    ])
})

app.listen(KEYS.PORT, () => {
    console.log(`Server is running on port ${KEYS.PORT}`)
})