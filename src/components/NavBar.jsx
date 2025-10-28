import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

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
  return (
      <>
          <div className="login-button" onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
          </div>
          <div className="nav-section">
            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"/>
          </div>
          <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                    ))}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="제품검색"/>
            </div>
          </div>
    </>
  )
}

export default NavBar