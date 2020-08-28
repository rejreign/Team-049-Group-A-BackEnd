const env = require("dotenv").config();
const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");
const express = require("express");

const app = express();
const router = require("./router");

const PORT = process.env.PORT || 3000; // convert to a conditional based on environment

// Initialize Knex
const knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(PORT);
