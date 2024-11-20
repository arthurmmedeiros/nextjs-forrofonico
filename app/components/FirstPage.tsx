import Image from 'next/image';
import { Amatic_SC } from 'next/font/google';

const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['400', '700']
});

const FirstPage = () => {
    return (
        <div 
            id='inicio'
            className="min-h-screen flex items-center justify-center ">
            <div className='container ml-auto mr-auto pr-4 pl-4 flex flex-col items-center justify-center'>
                <div className="mb-6 p-3">
                    <Image
                        src="/band.jpg"
                        alt="Next.js logo"
                        width={600}
                        height={500}
                        priority
                    />
                </div>
                <h1 className={`${amatic.className} text-8xl md:text-9xl font-black`}>
                    Forrofônico
                </h1>
            </div>            
        </div>
    );
};

export default FirstPage;
