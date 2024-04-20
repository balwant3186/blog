import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-700">
      <div className="rounded-full overflow-hidden bg-gray-700 w-72 h-72 mx-auto shadow-sm">
        <Image
          src="/images/site/balwant_singh.jpg"
          alt="Balwant"
          width={300}
          height={300}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h1 className="text-6xl font-bold text-gray-400 my-4">
        Hi, I{`'`}m Balwant
      </h1>
      <p className="text-2xl text-gray-300 w-[90%] max-w-7xl mx-auto">
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};
export default Hero;
