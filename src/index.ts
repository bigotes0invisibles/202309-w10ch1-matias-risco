import morgan from "morgan";
import app from "./app";
import { notFound } from "./middleware/error/errorMiddleware";

app.use(morgan("dev"));

app.use(notFound);
