import Image from "next/image";

export const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  if (src.startsWith("https://")) {
    return <Image src={src} alt={alt} width={50} height={50} />;
  } else {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL_FOR_IMG + src}`}
        alt={alt}
        width={50}
        height={50}
      />
    );
  }
};
