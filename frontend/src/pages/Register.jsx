import React, { useState, useContext } from 'react'
import '../styles/login.css'

import { Col, Container, Row, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!res.ok) {
                const errorData = await res.json(); // Phân tích dữ liệu lỗi từ response
                throw new Error(errorData.message); // Ném lỗi với thông điệp lỗi từ server
            }

            // const result = await res.json();

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');
        } catch (err) {
            console.error(err.message); // Log thông điệp lỗi từ server ra console
        }

        // console.log(credentials)
    }

    // const handleClick = async e => {
    //     e.preventDefault();

    //     try {
    //         const res = await fetch(`${BASE_URL}/auth/register`, {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(credentials)
    //         });

    //         if (!res.ok) {
    //             throw alert('Failed to register'); // Ném một lỗi nếu request không thành công
    //         }

    //         const result = await res.json();

    //         dispatch({ type: 'REGISTER_SUCCESS' });
    //         navigate('/login');
    //     } catch (err) {
    //         console.error(err.message); // Log lỗi nếu có lỗi xảy ra
    //     }
    // };

    return (<>
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" placeholder='Email' required id='email' onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                                    </FormGroup>
                                    <Button className='btn secondary__btn auth__btn' onClick={handleClick} type='submit'>Create Account</Button>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}

export default Register