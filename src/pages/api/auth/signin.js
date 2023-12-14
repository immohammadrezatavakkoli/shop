import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import Customer from "models/Customer";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
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
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  const { email, password } = req.body;
  const secretKey = process.env.SECRET_KEY;
  const expiration = 24 * 60 * 60;

  //   if(!email || !password) {
  //    return res.status(422).json({ status: "failed" , message: "Invalid Data" });
  //   }

  try {
    await validationSchema.validate({ email, password }, { abortEarly: false });
  } catch (validationError) {
    return res
      .status(422)
      .json({
        status: "failed",
        message: "Invalid Data",
        errors: validationError.errors,
      });
  }

  const customer = await Customer.findOne({ email: email });

  if (!customer) {
    return res
      .status(404)
      .json({ status: "failed", message: "شما حساب کاربری ندارید!" });
  }

  const isValid = await verifyPassword(password, customer.password);

  if (!isValid) {
    return res
      .status(422)
      .json({
        status: "failed",
        message: "نام کاربری یا کلمه عبور اشتباه است!",
      });
  }

  const token = sign({ email }, secretKey, { expiresIn: expiration });
  const serialized = serialize("token", token, {
    httpOnly: true,
    maxAge: expiration,
    path: "/",
  });

  res
    .status(200)
    .setHeader("Set-Cookie", serialized)
    .json({
      status: "success",
      message: "خوش آمدید",
      data: { email: customer.email },
    });
}
