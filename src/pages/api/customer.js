import { verify } from "jsonwebtoken";

export default async function handler(req, res) {

   if (req.method !== "GET") return;

   const secretKey = process.env.SECRET_KEY;

   const { token }  = req.cookies;

   if(!token) return res.status(401).json({ status: "failed", message: "You do not have an account! You must sign up"})

   const result = verify(token, secretKey);

   if(result){
      res.status(200).json({ status: "success", data: result})
   }else {
      res.status(401).json({ status: "failed", message: "You are unauthorized"})
   }
}