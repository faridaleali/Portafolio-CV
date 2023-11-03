import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
    <>
      <div id="projects">
        <h2 className="flex font-bold text-lg justify-center text-slate-800 mb-3">Proyectos realizados 👨‍🏫</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-lg shadow space-x-4 px-5 pt-1 dark:bg-gray-800 dark:border-gray-700">
            <Link href="https://cheers-pollofrito.netlify.app" target="_blank" className="flex justify-center">
              <Image
                className="rounded-t-lg"
                src="/cheers.png"
                width={350}
                height={300}
                alt="Picture of the author"
              />
            </Link>
            <div className="p-5">
              <a href="https://cheers-pollofrito.netlify.app" target="_blank">
                <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cheers PolloFrito</h5>
              </a>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>Web de comida desarrollada para la venta de comida del bar Cheers PolloFrito de manera freelance.</p>
                <h4 className="font-bold mt-1">Tecnologias utilizadas:</h4>
                <div className="flex mt-2">
                  <div className="w-1/2">
                    <p>• ReactJS</p>
                    <p>• NextJS</p>
                    <p>• TypeScript</p>
                    <p>• Tailwind</p>
                    <p>• Gitlab</p>
                  </div>
                  <div className="w-1/2">
                    <p>• Express</p>
                    <p>• MongoDB</p>
                    <p>• Jira</p>
                    <p>• NodeJS</p>
                    <p>• Vercel</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-7">
                <a href="https://cheers-pollofrito.netlify.app" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a la página
                </a>
                <a href="https://github.com/faridaleali/backend-cheers" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir al backend
                </a>
                <a href="https://github.com/faridaleali/frontend-cheers" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir al Frontend
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow space-x-4 px-5 pt-1 dark:bg-gray-800 dark:border-gray-700">
            <Link href="https://santornini-final53i.netlify.app/" target="_blank" className="flex justify-center">
              <Image
                className="rounded-t-lg"
                src="/menu.png"
                width={350}
                height={300}
                alt="Picture of the author"
              />
            </Link>
            <div className="p-5">
              <a href="https://santornini-final53i.netlify.app/" target="_blank">
                <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proyecto Rolling Menu</h5>
              </a>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>Proyecto realizado en el Bootcamp de RollingCode School para el proyecto final, con el fin de realizar una aplicacion de comida</p>
                <h4 className="font-bold mt-1">Tecnologias utilizadas:</h4>
                <div className="flex mt-2">
                  <div className="w-1/2">
                    <p>• ReactJS</p>
                    <p>• Bootstrap</p>
                    <p>• NodeJS</p>
                    <p>• JavaScript</p>
                  </div>
                  <div className="w-1/2">
                    <p>• Express</p>
                    <p>• MongoDB</p>
                    <p>• Github</p>
                    <p>• Trello</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-7">
                <a href="https://santornini-final53i.netlify.app/" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a la página
                </a>
                <a href="https://github.com/faridaleali/ProyectoFinal-BackEnd" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir al backend
                </a>
                <a href="https://github.com/faridaleali/ProyectoFinal-FrontEnd" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir al Frontend
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow px-5 pt-1 dark:bg-gray-800 dark:border-gray-700">
            <Link href="https://deporte-urban.netlify.app/index.html" target="_blank" className="flex justify-center">
              <Image
                className="rounded-t-lg"
                src="/urban.png"
                width={350}
                height={300}
                alt="Picture of the author"
              />
            </Link>
            <div className="p-5">
              <a href="https://deporte-urban.netlify.app/index.html" target="_blank">
                <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Urban deportes</h5>
              </a>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>Proyecto realizado en el Bootcamp de RollingCode School para el segundo proyecto para el profundizar conocimientos con JavaScript, con el fin de realizar una aplicacion de venta de ropa deportiva</p>
                <h4 className="font-bold mt-1">Tecnologias utilizadas:</h4>
                <div className="flex mt-2">
                  <div className="w-1/2">
                    <p>• HTML</p>
                    <p>• CSS</p>
                    <p>• Bootstrap</p>
                    <p>• Netlify</p>
                  </div>
                  <div className="w-1/2">
                    <p>• JavaScript</p>
                    <p>• Trello</p>
                    <p>• Github</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-7">
                <a href="https://deporte-urban.netlify.app/index.html" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir a la página
                </a>
                <a href="https://github.com/faridaleali/Deporte-Urban" target="_blank" className="inline-flex items-center px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir al Frontend
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5"></hr>
      </div>
    </>
  )
}