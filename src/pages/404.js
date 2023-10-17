import Head from "next/head";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PageNotFound = () => {
  return (
    <>
    <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
    </Head>
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2 bg-[#242424] px-5">
      <h1 className="text-[0.85rem] text-[#C3C4C5]">
          ۴۰۴ خطای
      </h1>
      <p className="text-[0.65rem] text-[#C3C4C5]">
          ! صفحه ای که به دنبال آن هستید در دسترس نیست
      </p>
      <div className="w-2/12 h-auto pt-4">
      <Stack
      spacing={2}
      direction="row"
      className='w-full flex flex-row justify-start items-center !bg-[#1A1A1A] !shadow !rounded-md hover:!bg-[#1A1A1A]'>
        <Button
        className='!w-full !h-full !p-0 !border-hidden !rounded-md !bg-inherit hover:!bg-black'
        variant="outlined"
        >
          <Link
            className='!w-full !h-full !text-[0.65rem] !text-[#C3C4C5] !px-3 !py-3 !rounded-md hover:!text-[#FBCB07] hover:!bg-[#1A1A1A]'
            href={"/"}
            replace
            >
            بازگشت به صفحه اصلی
            </Link>
        </Button>
      </Stack>
      </div>
    </div>
    </>
  );
}

export default PageNotFound;