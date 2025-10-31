import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate, setSearchQuery }) => {
    const navigate = useNavigate();
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [localSearchQuery, setLocalSearchQuery] = useState('');

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

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setLocalSearchQuery(value);
        setSearchQuery(value);
    };

    const clearSearch = () => {
        setLocalSearchQuery('');
        setSearchQuery('');
    };

    const handleLogoClick = () => {
        navigate('/');
        setLocalSearchQuery('');
        setSearchQuery(''); // 홈으로 갈 때 검색어 초기화
    };

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };

  return (
      <>
          {/* 햄버거 메뉴 아이콘 */}
          <div className="hamburger-menu" onClick={toggleSideMenu}>
              <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="login-button" onClick={handleAuthClick}>
              <FontAwesomeIcon icon={faUser}
              />
              <div>{authenticate ? '로그아웃' : '로그인'}</div>
          </div>
          <div className="nav-section">
            <img
                width={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                    ))}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                    type="text"
                    placeholder="제품검색"
                    value={localSearchQuery}
                    onChange={handleSearchChange}
                />
                {localSearchQuery && (
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="clear-search-icon"
                        onClick={clearSearch}
                    />
                )}
            </div>
          </div>

          {/* 사이드 메뉴 */}
          <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
              <div className="side-menu-header">
                  <FontAwesomeIcon icon={faTimes} onClick={closeSideMenu} style={{ cursor: 'pointer' }} />
              </div>
              <ul className="side-menu-list">
                  {menuList.map((menu, index) => (
                      <li key={index} onClick={closeSideMenu}>{menu}</li>
                  ))}
              </ul>
          </div>

          {/* 오버레이 */}
          {isSideMenuOpen && <div className="overlay" onClick={closeSideMenu}></div>}
    </>
  )
}

export default NavBar