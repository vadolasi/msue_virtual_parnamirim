import Image from "next/image"
import cineteatro from "./cineteatro.jpeg"
import base from "./base.jpeg"
import clsx from "clsx"
import { notoSans } from "./fonts"
import Link from "next/link"

const NavItem: React.FC<{ href: string, label: string }> = ({ href, label }) => (
  <ul className="border-4 border-blue-700 p-5 w-full lg:w-2/3 xl:w-1/2 text-center uppercase text-blue-700 bg-yellow-500 bg-opacity-50">
    <li>
      <Link href={href}>{label}</Link>
    </li>
  </ul>
)

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex items-center justify-center overflow-hidden text-center relative">
        <Image src={cineteatro} alt="Cineteatro" width={1200} height={800} className="absolute object-cover w-full h-full blur-sm" />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="z-50">
          <h2 className={clsx(notoSans.className, "text-3xl font-bold tracking-wider uppercase mb-5")}>Espaço Histórico Cultural Digital</h2>
          <h1 className="text-9xl tracking-wide [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Parnamirim</h1>
        </div>
      </section>
      <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 overflow-hidden text-center relative p-10 md:p-20 lg:p-32">
        <Image src={base} alt="Base" width={1200} height={800} className="absolute object-cover w-full h-full blur-sm" />
        <div className="absolute inset-0 bg-red-900 opacity-50" />
        <div className="z-50 lg:text-left flex items-center justify-center flex-col gap-5">
          <h3 className="text-5xl">Sobre o <span className="font-bold tracking-wider text-yellow-400">Espaço Histórico Cultural Digital de Parnamirim</span></h3>
          <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores praesentium porro explicabo voluptate non. Omnis fuga rerum consectetur doloribus ab officia laborum amet, explicabo maiores accusantium architecto sit blanditiis excepturi!</p>
        </div>
        <nav className="z-50 lg:text-left flex items-center justify-center flex-col gap-10 text-3xl">
          <NavItem href="/parnamirim" label="Navegue por Parnamirim" />
          <NavItem href="/museu" label="Museu virtual" />
          <NavItem href="/aeroespacial" label="Aeroespacial" />
          <NavItem href="/artistas" label="Artistas locais" />
        </nav>
      </section>
    </main>
  )
}
