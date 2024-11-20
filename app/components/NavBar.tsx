'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Amatic_SC } from 'next/font/google';

const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['400', '700']
});

const NavLinks = (
    {
        isMobile,
        handleClose
    }: {
        isMobile: boolean,
        handleClose?: () => void
    }) => {
    const linkStyle = isMobile
        ? 'text-3xl'
        : 'text-xl';

    const ulStyle = isMobile
        ? 'flex flex-col min-h-screen items-center justify-center gap-y-6 pb-3'
        : 'flex flex-row';

    return (
        <ul className={ulStyle}>
            <li className='mx-3.5'>
                <Link 
                    href='#inicio' 
                    onClick={() => {
                        if (isMobile && handleClose) {
                            handleClose();
                        }
                    }} 
                    className={linkStyle}
                >
                    Início
                </Link>
            </li>
            <li className='mx-3.5'>
                <Link 
                    href='#sobre' 
                    onClick={() => {
                        if (isMobile && handleClose) {
                            handleClose();
                        }
                    }} 
                    className={linkStyle}>
                    Sobre
                </Link>
            </li>
            <li className='mx-3.5'>
                <Link 
                    href='#agenda'
                    onClick={() => {
                        if (isMobile && handleClose) {
                            handleClose();
                        }
                    }} 
                    className={linkStyle}>
                    Agenda
                </Link>
            </li>
            <li className='mx-3.5'> 
                <Link 
                    href='#band-members'
                    onClick={() => {
                        if (isMobile && handleClose) {
                            handleClose();
                        }
                    }} 
                    className={linkStyle}>
                    Membros
                </Link>
            </li>
            <li className='mx-3.5'> 
                <Link 
                    href='#contacts' 
                    onClick={() => {
                        if (isMobile && handleClose) {
                            handleClose();
                        }
                    }} 
                    className={linkStyle}>
                    Contatos
                </Link>
            </li>
        </ul>
    );
};

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full fixed top-0 left-0 header-bg ">
            <nav className='container m-auto h-16'>
                <div className='flex justify-between items-center h-full'>
                    <div className='p-3 flex items-center'>
                        <Image 
                            src='/forrofonico-logo.webp'
                            alt='Forrofonico logo'
                            width={50}
                            height={50}
                            priority
                            className='mr-2'
                        />
                        <Link href='#inicio' className={`${amatic.className} font-bold text-2xl`}>
                            Forrofônico
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        <NavLinks isMobile={false}/>
                    </div>
                    <div className='md:hidden p-3 flex items-center '>
                        <button
                            type='button'
                            onClick={() => {setOpen(!isOpen);}}
                            className=''
                        >
                            <span className='sr-only'>Abrir menu principal</span>
                            {isOpen ? <X className='h-12 w-12'/> : <Menu className='h-12 w-12'/>}
                        </button>
                    </div>
                </div>
                {isOpen 
                && <div className='md:hidden header-bg'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <NavLinks isMobile handleClose={() => setOpen(false)}/>
                    </div>
                </div>}
            </nav>       
        </header>
    );
};

export default NavBar;
