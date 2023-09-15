export default function Footer() {
 return (
  <footer className="bg-white dark:bg-gray-900 mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h5 className="flex justify-center italic text-slate-300 mb-3">Pagina realizada con NextJS, Tailwind y ReactJS</h5>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> Portfolio de: Ale Ali Farid. © 2023 Todos los derechos reservados.
            </span>
        </div>
      </div>
  </footer>
  )
}