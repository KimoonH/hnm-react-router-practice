import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // 로그인 로직은 나중에 추가
    navigate('/');
  }

  return (
    <Container className="login-container">
      <div className="login-box">
        <h2>로그인</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력하세요" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            로그인
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Login