import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '700']
});

const ListItem = ({text} : {text: string}) => <li className='inline-flex items-center gap-x-2 py-3 px-4 text-2xl md:text-4xl'>
    {text}
</li>;

const Contacts = () => {
    return (
        <div 
            id='contacts'
            className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className={`container ml-auto mr-auto pr-4 pl-4 py-3 ${cormorant.className}`}>
                <h1 className={`text-6xl md:text-9xl font-black flex justify-center mb-8 ${cormorant.className}`}>Contatos</h1>

                <div className='flex flex-col md:flex-row justify-center'>
                    <ul className='flex flex-col divide-y divide-neutral-700 md:mr-8'>
                        <ListItem text='forrofonico@gmail.com'/>
                        <ListItem text='Acessoria de imprensa - ????'/>                  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
