import connectDB from "@/utils/connectDB";
import Customer from "models/Customer";
import { hashPassword } from "@/utils/auth";
import * as yup from "yup";

const validationSchema = yup.object({
   email: yup.string().email().required(),
   password: yup.string().required(),
});

export default async function handler(req, res) {

   if (req.method !== "POST") return;

   try {
      await connectDB();
   } catch (error) {
      console.log(error);
      return res.status(500).json({ status: "failed", message: "Error in connecting to DB"});
   }

  const { email, password } = req.body;

//   if(!email || !password) {
//    return res.status(422).json({ status: "failed" , message: "داده نامعتبر" })
//   }

   try {
     await validationSchema.validate({ email, password }, { abortEarly: false });
   } catch (validationError) {
     return res.status(422).json({ status: "failed", message: "Invalid Data", errors: validationError.errors });
   }

  const existingUser = await Customer.findOne({ email: email });

  if(existingUser){
   return res.status(422).json({ status: "failed" , message: "شما قبلا ثبت نام کرده اید" })
  }

  const hashedPassword = await hashPassword(password);

  const newCustomer = await Customer.create({ email: email, password: hashedPassword });

  res.status(201).json(({ status: "success", message: "ثبت نام شما با موفقیت انجام شد"}));
}