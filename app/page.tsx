import Image from "next/image";
import NavBar from "./components/NavBar";
import Sobre from "./components/Sobre";
import { Amatic_SC } from 'next/font/google'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <div>
      <NavBar/>
      <main className="text-#d4d4d4">
        <div className="container ml-auto mr-auto pr-4 pl-4">
          <div 
            id='inicio'
            className="min-h-screen flex flex-col items-center justify-center">            
            <div className="mb-6">
              <Image
                src="/band.jpg"
                alt="Next.js logo"
                width={600}
                height={500}
                priority
              />
            </div>
            <h1 className={`${amatic.className} text-9xl font-black`}>
              Grupo Forrofônico
            </h1>
          </div>
          <Sobre />
          <div 
            id='agenda'
            className="min-h-screen flex flex-col items-center justify-center">
            <div>
              Toda a agenda da banda

              <table className="min-w-full text-left text-sm font-light text-surface">
                <thead className="border-b border-neutral-200 font-medium">
                  <tr>
                    <th className="px-6 py-4">Dia</th>
                    <th className="px-6 py-4">Cidade</th>
                    <th className="px-6 py-4">Local</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">01/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Belo Horizonte</td>
                    <td className="whitespace-nowrap px-6 py-4">Algum lugar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center">
        <span>
          © TODOS OS DIREITOS RESERVADOS - Desenvolvido por Arthur Medeiros
        </span>
      </footer>
    </div>
  );
}
