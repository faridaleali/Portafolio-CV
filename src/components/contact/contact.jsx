"use client"

import Image from "next/image";

export default function Contact() {

  const mensajeWhatsApp  = `Hola Farid 👋, me interesa tu perfil. ¿Podrias hablarme mas de vos?`;
  const numeroWhasApp = "5493814689772"
  const apiWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhasApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <>
      <div id="contact">
        <h2 className="flex font-bold text-lg justify-center text-slate-800 mb-3">Contactame!</h2>
        <div className="flex flex-row justify-around mt-5  mx-auto w-3/4">
          <div className="flex flex-col justify-center items-center">
            <a className="flex flex-col justify-center items-center" target="_blank" href={apiWhatsApp} rel="noopener noreferrer">
              <Image
                src="/whatsapp.svg"
                width={100}
                height={100}
                alt="Whatsapp"
              />
              <p>Whastapp</p>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a className="flex flex-col justify-center items-center" target="_blank" href="https://www.linkedin.com/in/alealifarid/" rel="noopener noreferrer">
              <Image
                src="/linkedin.svg"
                width={100}
                height={100}
                alt="Whatsapp"
              />
              <p>Linkedin</p>
            </a>
          </div>
          <div>
            <a className="flex flex-col justify-center items-center" target="_blank" href="https://github.com/faridaleali" rel="noopener noreferrer">
              <Image
                src="/github.svg"
                width={100}
                height={100}
                alt="Whatsapp"
              />
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}