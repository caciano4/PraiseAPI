import {Response,Request,NextFunction} from 'express'



export function  ensureAdmin(request:Request,response:Response,next:NextFunction){
  //Verificr se o usurio tem permiçõ

  const admin = true;

  if(admin){
    return next(); 
  }
  return response.status(401).json({
    error: true,
    message: "Unauthorized"})
}