import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="w-full fixed top-0 left-0 bg-white">
        <div className="container flex justify-evenly items-center ml-auto mr-auto pr-4 pl-4 min-h-12">
          <a href='#inicio'>Início</a>
          <a href='#sobre'>Sobre</a>
          <a href='#agenda'>Agenda</a>
          <a href='#contatos'>Contatos</a>
        </div>        
      </header>
      <main>
        <div className="container ml-auto mr-auto pr-4 pl-4">
          <div 
            id='inicio'
            className="min-h-screen flex items-center flex-col mt-12">            
            <div className="mb-6">
              <Image
                src="/band.jpg"
                alt="Next.js logo"
                width={600}
                height={500}
                priority
              />
            </div>
            <h1 className="text-6xl">
              Grupo Forrofonico
            </h1>
          </div>
          <div 
            id='sobre'
            className="min-h-screen flex items-center flex-col">
            <div>
              O que sabemos sobre o grupo???

              <div>
                A banda
              </div>
            </div>
          </div>
          <div 
            id='agenda'
            className="min-h-screen flex items-center flex-col mt-12">
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
