import { useRouter } from "next/router";
import Head from "next/head";
import AuthForm from "@/templates/AuthForm";
import AboutMessage from "@/module/AboutMessage";
import { getSession } from "next-auth/react";

const Signup = () => {
  const router = useRouter();

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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  
  if(session) {
    return { redirect : {
      destination: "/",
      permanent: false,
    }}
  }

  return { props: { session }}
}