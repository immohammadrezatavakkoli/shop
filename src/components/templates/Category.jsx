import Image from "next/image";
import a from "../../assets/5.webp";
import b from "../../assets/6.webp";
import c from "../../assets/7.webp";
import d from "../../assets/8.webp";
import e from "../../assets/9.webp";
import f from "../../assets/10.webp";

const images = [a, b, c, d, e, f];
const captions = [
    "پاور بانک",
    "تبلت",
    "ساعت هوشمند",
    "اسپیکر",
    "موبایل",
    "گیمینگ",
];

const Category = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center flex-wrap gap-10">
      {images.map((image , index) => (
        <div key={index} className="w-auto h-auto flex flex-col justify-center items-center gap-2">
          <div className="w-32 h-32 border-2 border-[#FBCB07] rounded-full p-2 relative overflow-hidden">
            <div className="group w-full h-full transition-transform transform origin-center scale-100  hover:scale-110">
              <Image
              src={image}
              alt={'Category Picture'}
              loading="lazy"
              />
            </div>
          </div>
            <p className="mt-2 text-center text-[#C3C4C5] text-xs font-Sans hover:text-[#FBCB07]">
              {captions[index]}
            </p>
        </div>
      ))}
    </div>
  );
}

export default Category;