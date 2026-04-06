'use client'

import styles from '../../../styles/navs.module.css'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navs = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleHamburger = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={`${styles.logo} ${menuOpen ? styles.hideLogo : ''}`}>
                    <Link href={'/'}>
                        <Image
                            src={'/log.png'}
                            alt='logo'
                            width={400}
                            height={300}
                        />
                    </Link>
                </div>

                <button onClick={handleHamburger}>
                    {menuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
            </div>

            <div className={styles.wrappper}>
                <div className={styles.logo}>
                    <Link href={'/'}>
                        <Image
                            src={'/log.png'}
                            alt='logo'
                            width={400}
                            height={300}
                        />
                    </Link>
                </div>

                <div className={styles.navs}>
                    <ul>
                        <li><Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link></li>
                        <li><Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link></li>
                        <li><Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link></li>
                        <li><Link href="/doctors" className={pathname === "/doctors" ? styles.active : ""}>Doctors</Link></li>
                        <li><Link href="/blogs" className={pathname === "/blogs" ? styles.active : ""}>Blogs</Link></li>
                        <li><Link href="/services" className={pathname === "/services" ? styles.active : ""}>Services</Link></li>
                    </ul>
                </div>

                <div className={styles.appointment}>
                    <Link href="/appointment">Book Appointment</Link>
                </div>
            </div>

            <div className={`${styles.mobile} ${menuOpen ? styles.open : ""}`}>
                <div className={styles.close}>
                    <button onClick={handleHamburger}>
                        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>

                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <Link href={'/'}>
                                <Image
                                    src={'/logo.png'}
                                    alt='logo'
                                    width={400}
                                    height={300}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <ul>
                            <li><Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link></li>
                            <li><Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link></li>
                            <li><Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link></li>
                            <li><Link href="/doctors" className={pathname === "/doctors" ? styles.active : ""}>Doctors</Link></li>
                            <li><Link href="/blogs" className={pathname === "/blogs" ? styles.active : ""}>Blog</Link></li>
                            <li><Link href="/services" className={pathname === "/services" ? styles.active : ""}>Services</Link></li>
                        </ul>
                    </div>

                    <div className={styles.appointment}>
                        <Link href="/appointment">Book Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navs;