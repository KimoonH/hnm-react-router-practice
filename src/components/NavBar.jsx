import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate, setSearchQuery }) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신상아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ];

    const handleAuthClick = () => {
        if (authenticate) {
            // 로그아웃
            setAuthenticate(false);
        } else {
            // 로그인 페이지로 이동
            navigate('/login');
        }
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
        navigate('/');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

  return (
      <>
          <div className="hamburger-menu" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
              <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="login-button" onClick={handleAuthClick}>
              <FontAwesomeIcon icon={faUser} />
              <div>{authenticate ? '로그아웃' : '로그인'}</div>
          </div>
          <div className="nav-section">
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
              alt="H&M 로고"
              onClick={() => navigate('/')}
              style={{cursor: 'pointer'}}
            />
          </div>
          <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                    ))}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} style={{cursor: 'pointer'}} />
                <input
                    type="text"
                    placeholder="제품검색"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
          </div>

          {/* 사이드 메뉴 */}
          <div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
              <div className="side-menu-header">
                  <FontAwesomeIcon icon={faTimes} onClick={() => setSideMenuOpen(false)} style={{cursor: 'pointer'}} />
              </div>
              <ul className="side-menu-list">
                  {menuList.map((menu, index) => (
                      <li key={index} onClick={() => setSideMenuOpen(false)}>{menu}</li>
                  ))}
              </ul>
          </div>
          {sideMenuOpen && <div className="overlay" onClick={() => setSideMenuOpen(false)}></div>}
    </>
  )
}

export default NavBar