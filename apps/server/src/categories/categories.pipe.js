<<<<<<< HEAD
import {createCategorySchema , formatZodError} from "@repo/common";
import { HttpException } from "../common/http-exception";

export function createCategoryPipe(req,res,next){
    const data = req.body;
    const result = createCategorySchema.safeParse(data);
    if(!result.success){
        throw new HttpException(formatZodError(result.errior), 400);
    }
    req.body = result.data;
    next();
}

export function updateCategoryPipe(req,res,next){
    const data = req.body;
    const result = createCategorySchema.safeParse(data);
    if(!result.success){
        throw new HttpException(formatZodError(result.errior), 400);
    }
    req.body = result.data;
    next();
=======
import { createCategorySchema, formatZodError } from "@repo/common";
import { HttpException } from "../common/http-exception";

export function createCategoryPipe(req, res, next) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateCategoryPipe(req, res, next) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
>>>>>>> c8bfd8e7c21b4333862670d095532b30b064778e
}