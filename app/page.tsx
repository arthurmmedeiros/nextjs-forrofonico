import NavBar from './components/NavBar';
import About from './components/About';
import Agenda from './components/Agenda';
import FirstPage from './components/FirstPage';
import BandMembers from './components/BandMembers';
import Contacts from './components/Contacts';

export default function Home() {
    return (
        <div>
            <NavBar/>
            <main className="text-#d4d4d4">
                <div>
                    <FirstPage />
                    <About />
                    <Agenda />
                    <Contacts />
                    <BandMembers />                    
                </div>
            </main>
            <footer className="flex flex-col items-center justify-center p-3">
                <div className='text-xs md:text-base'>© TODOS OS DIREITOS RESERVADOS</div>
                <div className='text-xs md:text-base'>Desenvolvido por Arthur Medeiros</div>
            </footer>
        </div>
    );
}
