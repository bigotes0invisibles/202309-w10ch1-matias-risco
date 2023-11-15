import morgan from "morgan";
import express from "express";
import { notFound } from "./middleware/error/errorMiddleware.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import app from "./app.js";
import pingRouter from "./features/ping/router/pingRouter.js";

app.use(express.json());
app.use(morgan("dev"));
app.use("/", pingRouter);
app.use("/things", thingsRouter);

app.use(notFound);
