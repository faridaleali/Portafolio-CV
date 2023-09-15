import Link from "next/link"

export default function NotFound() {
  return (
    <section>
      <h1>Error 404</h1>
      <p>Pagina no econtrada</p>
      <Link href="/">Volver</Link>
    </section>
  )
}