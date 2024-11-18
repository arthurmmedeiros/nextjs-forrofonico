'use client'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const NavLinks = ({isMobile}: {isMobile: boolean}) => {
    const linkStyle = isMobile
        ? 'block px-3 py-2 rounded-md text-base font-medium'
        : '';

    const ulStyle = isMobile
        ? 'flex flex-col'
        : 'flex flex-row'
    return (
        <ul className={ulStyle}>
            <li className='mx-3.5'>
                <Link href='#inicio' className={linkStyle}>
                    Início
                </Link>
            </li>
            <li className='mx-3.5'>
                <Link href='#sobre' className={linkStyle}>
                    Sobre
                </Link>
            </li>
            <li className='mx-3.5'>
                <Link href='#agenda' className={linkStyle}>
                    Agenda
                </Link>
            </li>
            <li className='mx-3.5'> 
                <Link href='#contatos' className={linkStyle}>
                    Contatos
                </Link>
            </li>
        </ul>
    )
}

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full fixed top-0 left-0 header-bg ">
            <nav className='container m-auto h-16'>
                <div className='flex justify-between items-center h-full'>
                    <div className='p-3'>
                        <Image 
                            src='/forrofonico-logo.webp'
                            alt='Forrofonico logo'
                            width={50}
                            height={50}
                            priority
                        />
                    </div>
                    <div className="hidden md:flex items-center">
                        <NavLinks isMobile={false}/>
                    </div>
                    <div className='md:hidden p-3 flex items-center'>
                        <button
                            type='button'
                            onClick={() => {setOpen(!isOpen)}}
                            className=''
                        >
                            <span className='sr-only'>Abrir menu principal</span>
                            {isOpen ? <X className='h-6 w-6'/> : <Menu className='h-6 w-6'/>}
                        </button>
                    </div>
                </div>
                {isOpen 
                && <div className='md:hidden header-bg'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <NavLinks isMobile/>
                    </div>
                </div>}
            </nav>       
      </header>
    );
};

export default NavBar;
