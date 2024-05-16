import "dotenv/config";
import express from "express";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";
import postsController from "./posts/posts.controller";
import cors from "cors";
import { corsOptions } from "./constants/cors-options";
import authController from "./auth/helper/auth.controller";
import { asyncHandler } from "./common/async-handler";


const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});


app.use("/posts", postsController);
app.use("/auth", authController);


app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

app.use(asyncHandler);
app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
