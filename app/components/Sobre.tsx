import Image from "next/image";

const Sobre = () => {    
    return (
        <div 
        id='sobre'
        className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mr-6">
            <Image
                src="/band.jpg"
                alt="Next.js logo"
                width={600}
                height={500}
                priority
              />
          </div>

          <div className="basis-2/4">
            <p className="text-justify">
                Boa surpresa no cenário musical do forró brasileiro, 
                o grupo mineiro Forrofônico traz uma formação inusitada, 
                já que seus integrantes têm formação na música clássica, a maior parte deles componentes da Orquestra Sinfônica de Minas Gerais. Somente isso para justificar a presença de primeiro e segundo violino na banda, que conta ainda com Greyce Ornellas como cantora, Sérgio Saraiva no acordeom, Aluizio Brant e Rosinei Barbosa na percussão, Ravel Lanza no lº violino, Leise Renhe no IIº violino, Aristóteles Medeiros na viola, Vanilce Rezende ao violoncelo e Sergio Rabello no contra-baixo.
            </p>            
          </div>
        </div>
      </div>
    );
};

export default Sobre;
