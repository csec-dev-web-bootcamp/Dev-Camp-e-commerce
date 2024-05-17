<<<<<<< HEAD
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import authController from './auth/auth.controller';
import { HttpException } from './common/http-exception';
import { corsOptions } from './config/cors-options';
import { exceptionHandler } from './middlewares/exception-handler';
import productsController from './products/products.controller';
import usersController from './users/users.controller';
=======
import "dotenv/config";
import express from "express";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";
import postsController from "./posts/posts.controller";
import cors from "cors";
import { corsOptions } from "./constants/cors-options";
import authController from "./auth/helper/auth.controller";
import { asyncHandler } from "./common/async-handler";

>>>>>>> 46aeefd42e7b589e0b753a19d01b720ef05af41a

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello',
  });
});

<<<<<<< HEAD
app.use('/products', productsController);
app.use('/auth', authController);
app.use('/users', usersController);
=======

app.use("/posts", postsController);
app.use("/auth", authController);

>>>>>>> 46aeefd42e7b589e0b753a19d01b720ef05af41a

app.all('*', (req, res) => {
  throw new HttpException('Not Found', 404);
});

<<<<<<< HEAD
app.use(exceptionHandler);
=======
app.use(asyncHandler);
app.use(httpExceptionHandler);
>>>>>>> 46aeefd42e7b589e0b753a19d01b720ef05af41a

app.listen(8000, () => {
  console.log('App is running at port: 8000');
});
