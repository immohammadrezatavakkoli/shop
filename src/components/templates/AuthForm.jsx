import { Formik, Form } from "formik";
import FieldForm from "@/module/FieldForm";
import Link from "next/link";

const AuthForm = ({ signUpHandler , signInHandler, titleBtnFrom, titleBtnDirection, direction }) => {
  return (
    <Formik
    initialValues={{ email: "", password: ""}}
    validate={(values) => {
      const errors = {};
    
      if (!values.email) {
        errors.email = "لطفا ایمیل خود را وارد کنید";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "آدرس ایمیل را به درستی وارد کنید";
      }

      if (!values.password) {
        errors.password = "لطفا رمز عبور خود را وارد کنید";
      } else if (!/^.*$/.test(values.password)) {
        errors.password = "رمز عبور را به درستی وارد کنید";
      }
       
      return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (signUpHandler) {
          signUpHandler(values);
        } else if (signInHandler) {
          signInHandler(values);
        }
        setSubmitting(false);
      }}
      >
         <Form className="w-2/6 h-1/2 flex flex-col justify-start items-center gap-10 rounded-[0.375rem] bg-[#1A1A1A] py-10">
            <div className="w-5/6 h-auto flex flex-col justify-center items-center gap-2">
               <FieldForm
               type="text"
               name="email"
               minLength="6"
               maxLength=""
               placeholder="ایمیل"
               />
               <FieldForm
               type="text"
               name="password"
               minLength="6"
               maxLength="12"
               placeholder="رمز عبور"
               />
            </div>
            <div  className="w-5/6 h-10 flex flex-col justify-center items-center gap-3">
            <button
            type="submit"
            className="w-full h-full flex flex-row justify-center items-center rounded-md p-2 text-[#C3C4C5] text-sm bg-[#242424] transition-all duration-500 hover:bg-[#FBCB07] hover:text-black"
            >
              {titleBtnFrom}
            </button>
            <Link href={direction} className="w-full h-full flex flex-row justify-start items-center text-[0.60rem] text-[#FBCB07] px-1">
              {titleBtnDirection}
            </Link>
            </div>
         </Form>
    </Formik>
  );
}

export default AuthForm;