import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '700']
});

interface AgendaItemProps {
    date:string,
    name: string,
    location: string
}

const AgendaItem = (props: AgendaItemProps) => {
    return <div className='flex flex-col md:flex-row md:justify-between md:border-solid border-b-2 border-b-amber-950 pb-3'>
        <div className='flex flex-col md:flex-row md:justify-between text-3xl basis-8/12 mb-3 md:mb-0'>
            <div>
                {props.date}
            </div>
            <div className='text-5xl font-bold'>
                {props.name}
            </div>
            <div className='text-3xl'>
                {props.location}
            </div>
        </div>
        <em className='text-3xl'>
            Tickets disponíveis no local
        </em>
    </div>;
};

const Agenda = () => {    
    return (
        <div 
            id='agenda'
            className="min-h-screen flex flex-col items-center justify-center">
            <div className={`container ml-auto mr-auto pr-4 pl-4 py-3  ${cormorant.className}`}>
                <h1 className='text-6xl md:text-9xl font-black flex justify-center mb-8'>Agenda</h1>

                <AgendaItem
                    date='Dec 13, 2024'
                    name='Nome do bar???'
                    location='Belo Horizonte, Minas Gerais'
                />

                <em className='text-2xl'>... more to come</em>
            </div>
        </div>
    );
};

export default Agenda;
