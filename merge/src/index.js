import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="mt-5" data-aos="fade-up">Bienvenido a My Next App</h1>
      <p data-aos="fade-left">Esta es una aplicación Next.js con Bootstrap, SASS y AOS.</p>
      <Image src="/images/ejemplo.jpg" alt="Ejemplo" width={500} height={300} />
    </div>
  );
}
