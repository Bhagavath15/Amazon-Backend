import express from "express"; // "type": "module"
import { client } from "../index.js"

const router = express.Router()

router.post("/dashboard", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("dashboard")
        .insertMany(result)
    response.send(data)
})

router.get("/dashboard", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("dashboard")
        .find({})
        .toArray();
    response.send(detail)
})



router.post("/fruits", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("fruits")
        .insertOne(result)
    response.send(data)
})

router.get("/fruits", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("fruits")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/fruits/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("fruits")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


router.post("/vegetables", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("vegetable")
        .insertOne(result)
    response.send(data)
})

router.get("/vegetables", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("vegetable")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/vegetables/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("vegetable")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/rice", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("rice")
        .insertOne(result)
    response.send(data)
})

router.get("/rice", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("rice")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/rice/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("rice")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/dal", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("dal")
        .insertOne(result)
    response.send(data)
})

router.get("/dal", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("dal")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/dal/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("dal")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/atta", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("atta")
        .insertOne(result)
    response.send(data)
})

router.get("/atta", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("atta")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/atta/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("atta")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/oil", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("oil")
        .insertOne(result)
    response.send(data)
})

router.get("/oil", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("oil")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/oil/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("oil")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/masala", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("masala")
        .insertOne(result)
    response.send(data)
})

router.get("/masala", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("masala")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/masala/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("masala")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/sauce", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("sauce")
        .insertOne(result)
    response.send(data)
})

router.get("/sauce", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("sauce")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/sauce/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("sauce")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/egg", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("egg")
        .insertOne(result)
    response.send(data)
})

router.get("/egg", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("egg")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/egg/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("egg")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/chicken", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("chicken")
        .insertOne(result)
    response.send(data)
})

router.get("/chicken", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("chicken")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/chicken/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("chicken")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/fish", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("fish")
        .insertOne(result)
    response.send(data)
})

router.get("/fish", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("fish")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/fish/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("fish")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/mutton", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("mutton")
        .insertOne(result)
    response.send(data)
})

router.get("/mutton", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("mutton")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/mutton/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("mutton")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/drinks", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("drinks")
        .insertOne(result)
    response.send(data)
})

router.get("/drinks", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("drinks")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/drinks/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("drinks")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/juice", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("juice")
        .insertOne(result)
    response.send(data)
})

router.get("/juice", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("juice")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/juice/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("juice")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/tea", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("tea")
        .insertOne(result)
    response.send(data)
})

router.get("/tea", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("tea")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/tea/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("tea")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/coffee", async function (request, response) {
    const result = request.body
    const data = await client
        .db("amazon")
        .collection("coffee")
        .insertOne(result)
    response.send(data)
})

router.get("/coffee", async function (request, response) {
    const detail = await client
        .db("amazon")
        .collection("coffee")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/coffee/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("amazon")
        .collection("coffee")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


export default router