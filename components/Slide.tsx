import Image from "next/image";

interface SlideProps {
  subtitle: string;
  description: string;
  image: string;
}

export default function Slide({ subtitle, description, image }: SlideProps) {
  return (
    <div className="w-full h-screen flex flex-col p-6">
      <header className="text-3xl mb-6 mt-6 text-center">Evolving the drive with <span className="font-bold">360-degree</span><br/> nonwoven solutions</header>

      <div className="flex flex-1 items-center justify-between">
        <div className="w-1/2 ml-32">
          <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>
          <p className="text-lg text-gray-300">{description}</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={image} alt="slide image" width={800} height={600}/>
        </div>
      </div>
    </div>
  );
}
