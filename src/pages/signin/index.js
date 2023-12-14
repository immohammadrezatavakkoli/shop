import { useRouter } from "next/router";
// import { useEffect } from "react";
import Head from "next/head";
import AuthForm from "@/templates/AuthForm";
import { verify } from "jsonwebtoken";
import AboutMessage from "@/module/AboutMessage";

const Signin = () => {

   const router = useRouter();

   // useEffect(() => {
   //    fetch("api/customer")
   //    .then(res => res.json())
   //    .then((data) => {
   //       // console.log(data)
   //       if(data.status === "success"){
   //          // router.replace("/");
   //          window.location.href = "/"
   //       }
   //    })
   // },[router])

   const signInHandler = async (data) => {

      const res = await fetch("/api/auth/signin",{
         method: "POST",
         body: JSON.stringify({ email: data.email, password: data.password }),
         headers: {"Content-Type": "application/json"}
      })
      const result = await res.json();
   
      if(result.status === "success"){
         AboutMessage({ message: result.message });
         router.push("/");
       }else{
        AboutMessage({ message: result.message });
         router.push("/signup");
       }
   }

  return (
   <>
   <Head>
       <title>Signin</title>
       <link rel="icon" href="/" />
   </Head>
   <div className="w-full h-screen flex flex-col justify-center items-center px-10 bg-[#242424]">
     <AuthForm signInHandler={signInHandler} titleBtnFrom={"ورود"} titleBtnDirection={"ثبت‌ نام نکرده‌اید؟ همین حالا حساب کاربری بسازید!"} direction={"/signup"}/>
   </div>
   </>
  );
}

export default Signin;

export async function getServerSideProps(context){
   const { token } = context.req.cookies;
   const secretKey = process.env.SECRET_KEY;

   if(token){
      const result = verify(token, secretKey);
      return {
        redirect: { destination: "/", permanent: false }
      };
    }
 
   return {
     props: {}
   }
}