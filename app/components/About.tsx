import Image from 'next/image';

import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '700']
});

const About = () => {    
    return (
        <div 
            id='sobre'
            className="min-h-screen bg-white flex items-center justify-center">
            <div className="container ml-auto mr-auto pr-4 pl-4 py-3">
                <h1 className={`text-6xl md:text-9xl font-black flex justify-center mb-8 ${cormorant.className}`}>Sobre</h1>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className="mr-6 mb-3 md:mb-0">
                        <Image
                            src="/band-II.jpg"
                            alt="Next.js logo"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>

                    <div className="basis-2/4">
                        <p className='mb-2 text-center'>
                            Grupo <b>Forrofônico</b> traz nova proposta musical
                            abrindo outras perspectivas para releituras de clássicos do forró.
                        </p>
                        <p className="mb-2 text-center">
                            Boa surpresa no cenário musical do forró brasileiro, 
                            o grupo mineiro Forrofônico traz uma formação inusitada, 
                            já que seus integrantes têm formação na música clássica, 
                            a maior parte deles componentes da Orquestra Sinfônica de Minas Gerais.
                        </p>
                        <p className="text-center">
                            O destaque da banda são os arranjos de <b>Fred Natalino</b>, 
                            trazendo ícones do cancioneiro popular totalmente reformulados, 
                            com arranjos inusitados que não tiraram a essência das músicas.    
                        </p>            
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default About;
