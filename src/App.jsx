import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from "./page/Login"
import ProductAll from "./page/ProductAll"
import ProductDetail from "./page/ProductDetail"
import NotFound from "./page/NotFound"
import NavBar from "./components/NavBar"
import PrivateRoute from "./components/PrivateRoute"
import { useState } from "react"

// 1.전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있따.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나 로그인이 안되었을 경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면, 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면, 로그아웃이 보이고 로그 아웃 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<ProductAll searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={
          <PrivateRoute authenticate={authenticate}>
            <ProductDetail/>
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
