"use client"

import Image from "next/image"

export default function Home() {

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  const handleOpenCV = () => {
    const urlCV = "https://drive.google.com/file/d/1YY_SRpiz392GekzgCjUceDunb8elPAgO/view?usp=sharing"
    window.open(urlCV, '_blank')
  }

  return (
    <>
      <div id="home" className="flex mx-auto justify-around fondo-home py-16 px-10">
        <div className="my-auto">
          <h3 className="font-bold text-lg mb-2 text-slate-600">Hola a todos , yo soy</h3>
          <h1 className="font-bold text-3xl text-slate-800">Ale Ali, Farid</h1>
          <h2 className="font-bold text-sm mt-1 text-slate-900">Programador FullStack</h2>
          <button 
            type="button"
            className="text-white border border-sky-700 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6"
            onClick={scrollToContact}>
            Contactame
          </button>
          <button 
            type="button" 
            className="text-white border border-green-700 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ms-3 mt-6"
            onClick={handleOpenCV}>
            Descargar CV
          </button>
        </div>
        <Image
          src="/foto.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>
      <hr className="mb-5"></hr>
    </>
  )
}