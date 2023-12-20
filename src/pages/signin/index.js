import React from 'react';
import Head from "next/head";
import AuthForm from "@/templates/AuthForm";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import AboutMessage from "@/module/AboutMessage";

const Signin = () => {

  const router = useRouter();

  const signInHandler = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if(res.status === 200){
      AboutMessage({ message: "خوش آمدین" });
      router.push("/");
    }else if(res.error === "شما حساب کاربری ندارید!") {
      AboutMessage({ message: "شما حساب کاربری ندارید" });
      router.replace("/signup");
    }else {
      AboutMessage({ message: res.error });
    }
  };

  return (
    <>
      <Head>
        <title>Signin</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-screen flex flex-col justify-center items-center px-10 bg-[#242424]">
        <AuthForm
          signInHandler={signInHandler}
          titleBtnFrom={"ورود"}
          titleBtnDirection={
            "ثبت‌ نام نکرده‌اید؟ همین حالا حساب کاربری بسازید!"
          }
          direction={"/signup"}
        />
        {/* <button onClick={() => signIn("google")}>
          ورود با گوگل
        </button> */}
      </div>
    </>
  );
};

export default Signin;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  
  if(session) {
    return { redirect : {
      destination: "/",
      permanent: false,
    }}
  }

  return { props: { }}
}