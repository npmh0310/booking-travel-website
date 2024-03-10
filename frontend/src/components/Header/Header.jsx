import React, { useEffect, useRef, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'

// import logo from '../../assets/images/logo.png'
import "./header.css"
import { AuthContext } from '../../context/AuthContext'

const nav__link = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    // const logout = () => {
    //     dispatch({ type: 'LOGOUT' })
    //     navigate('/')
    // }

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        // Kiểm tra nếu phần tử có id là "root" tồn tại trước khi truy cập classList
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.classList.add('logout-animation');
            setTimeout(() => {
                navigate('/');
            }, 500); // Đợi cho animation hoàn thành trước khi điều hướng
        } else {
            navigate('/');
        }
    };

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            }
            else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu')
    }

    return (<>
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* logo */}
                        <div className="logo">
                            {/* <img src={logo} alt="" /> */}
                            Travelholic
                        </div>
                        {/* menu start */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className='menu d-flex align-items-center gap-5'>
                                {nav__link.map((item, index) => (
                                    <li className='nav__item' key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={navClass => navClass.isActive ? 'active__link' : ''}>
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                {
                                    user ? <>
                                        <h5 className="mb-0">{user.username}</h5>
                                        <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                                    </> : <>

                                        <Button className='btn secondary__btn'>
                                            <Link to='/login'>Login</Link>
                                        </Button>
                                        <Button className='btn primary__btn'>
                                            <Link to='/register'>Register</Link>
                                        </Button>
                                    </>
                                }
                            </div>

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className='ri-menu-line'></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    </>)
}

export default Header