import Image from "next/image"

export default function Career() {
  return (
    <>
      <div id="career">
      <h2 className="flex font-bold text-lg justify-center text-slate-800 mb-3">Educacion 📚</h2>
        <div id="about" className="lg:grid-cols-3 sm:grid-cols-1 grid py-14">
          <div>
            <Image
              src="/UNT.png"
              width={200}
              height={200}
              alt="Universidad Nacional de Tucuman"
              className="flex justify-center mx-auto mb-2"
            />
            <h3 className="flex font-bold text-lg justify-center text-slate-800">Universidad Nacional de Tucuman</h3>
            <div className="flex justify-center mb-2">
              <h4 className="flex justify-center flex font-semibold italic text-sm text-slate-600">Contador publico (ene/18 - jul-23)</h4>
            </div>
            <p className="flex justify-center px-20 sm:px-3 font-semibold text-gray-700">Conocimientos sobre:</p>
            <div className="flex mt-3 justify-center">
              <ul className=" px-20 sm:px-3 italic text-gray-700 list-disc">
                <li>Análisis matemático y lógica.</li>
                <li>Análisis financiero y costos.</li>
                <li>Estadística descriptiva.</li>
                <li>Organización empresarial </li>
                <li>Analisis y control de sistemas</li>
                <li>Economia y contabilidad</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/rolling.png"
              width={200}
              height={100}
              alt="Universidad Nacional de Tucuman"
              className="flex justify-center mx-auto mb-2"
            />
            <h3 className="flex font-bold text-lg justify-center text-slate-800">RollingCode School: Bootcamp</h3>
            <div className="flex justify-center mb-2">
              <h4 className="flex justify-center flex font-semibold italic text-sm text-slate-600">Fullstack Engineer (ene/23 - sep-23)</h4>
            </div>
            <p className="flex justify-center px-20 sm:px-3 font-semibold text-gray-700">Conocimientos sobre:</p>
            <div className="flex mt-3 justify-center">
              <ul className=" px-20 sm:px-3 italic text-gray-700 list-disc">
                <li>Bases de programacion</li>
                <li>Metodologias agiles</li>
                <li>Uso de tecnologias Frontend</li>
                <li>Uso de tecnologias Backend</li>
                <li>Creacion de productos y proyectos</li>
                <li>Practica de ingles Speeking sessions</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/nobook.png"
              width={200}
              height={100}
              alt="Universidad Nacional de Tucuman"
              className="flex justify-center mx-auto mb-2"
            />
            <h3 className="flex font-bold text-lg justify-center text-slate-800">NoBook English School</h3>
            <div className="flex justify-center mb-2">
              <h4 className="flex justify-center flex font-semibold italic text-sm text-slate-600">Comunicacion profesional en ingles (ago/23 - actual)</h4>
            </div>
            <p className="flex justify-center px-20 sm:px-3 font-semibold text-gray-700">Conocimientos sobre:</p>
            <div className="flex mt-3 justify-center">
              <ul className=" px-20 sm:px-3 italic text-gray-700 list-disc">
                <li>Comunicacion en ingles</li>
                <li>Escritura en ingles</li>
                <li>Escucha en ingles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5"></hr>
    </>
  )
}