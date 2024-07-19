import cctv from "./cctv.webp"
import barreira from "./barreira.jpg"
import Image from "next/image"

export default function Museu() {
  return (
    <main>
      <section className="h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <Image src={cctv} alt="CCTV" width={990} height={660} className="object-cover w-full h-full" />
      </section>
      <section className="h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <Image src={barreira} alt="BArreira do inferno" width={800} height={550} className="object-cover w-full h-full" />
      </section>
      <section className="h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <Image src={barreira} alt="BArreira do inferno" width={800} height={550} className="object-cover w-full h-full" />
      </section>
      <section className="h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <Image src={barreira} alt="BArreira do inferno" width={800} height={550} className="object-cover w-full h-full" />
      </section>
    </main>
  )
}
