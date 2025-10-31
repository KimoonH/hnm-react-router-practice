import { useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">페이지를 찾을 수 없습니다</h2>
          <p className="not-found-text">
            요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.
          </p>
          <button className="not-found-button" onClick={goToHome}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </Container>
  )
}

export default NotFound
