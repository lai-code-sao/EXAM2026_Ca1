import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <div>
        <header className="container header mb-2">
            <h1 className="text-white">Quản lý danh sách sản phẩm</h1>
            <p className="text-white">Giao diện nhập liệu và hiển thị danh sách sản phẩm một cách trực quan, rõ ràng</p>
        </header>
        <div className="d-flex">
            <ProductForm products={products} onAddProduct={addProduct}/>
            <div className="listProduct d-flex flex-column mb-2 bg-white rounded-3 ">
                <div className="p-2">
                    <h3>Danh sách sản phẩm</h3>
                    <p>Danh sách sản phẩm mẫu được hiển thi từ dữ liệu hẹ thống</p>
                </div>
                <table border="1">
                    <thead>
                        <tr>
                          <th>STT</th>
                          <th>TÊN SẢN PHẨM</th>
                          <th>DANH MỤC</th>
                          <th>GIÁ</th>
                          <th>TRẠNG THÁI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>STT</td>
                            <td>Tên sản phẩm</td>
                            <td>Danh mục</td>
                            <td>Giá</td>
                            <td>Trạng thái</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default App
