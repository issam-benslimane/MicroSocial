import express from "express";
import cors from "cors";
import config from "./config";
import { authRouter } from "./modules/auth";
import { usersRouter } from "./modules/users";
import { postsRouter } from "./modules/posts";
import { relationshipsRouter } from "./modules/relationships";
import { handleError, unknowEndpoint } from "./modules/common/middlewares";

const app = express();
const PORT = config.PORT || 8080;
app.listen(PORT, () => console.log("listening on port:", PORT));

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/relationships", relationshipsRouter);

app.use(unknowEndpoint);
app.use(handleError);
