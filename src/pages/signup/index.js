// import { useEffect } from "react";
import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";
import Head from "next/head";
import AuthForm from "@/templates/AuthForm";
import AboutMessage from "@/module/AboutMessage";

const Signup = () => {
  const router = useRouter();

  // useEffect(() => {
  //   fetch("api/customer")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       if (data.status === "success") {
  //         // router.replace("/");
  //         window.location.href = "/";
  //       }
  //     });
  // }, [router]);

  const signUpHandler = async (data) => {
  
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: data.email, password: data.password }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();

    if(result.status === "success"){
      AboutMessage({ message: result.message });
      router.push("/signin");
    }else{
      AboutMessage({ message: result.message });
      router.push("/signin");
    }
  };
  

  return (
  <>
    <Head>
        <title>Signup</title>
        <link rel="icon" href="/" />
    </Head>
    <div className="w-full h-screen flex flex-col justify-center items-center px-10 bg-[#242424]">
      <AuthForm signUpHandler={signUpHandler} titleBtnFrom={"ثبت نام"} titleBtnDirection={"حساب کاربری دارید؟ وارد شوید!"} direction={"/signin"} />
    </div>
  </>
  );
};

export default Signup;

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