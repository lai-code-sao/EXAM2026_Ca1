import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="container header mb-2">
            <h1 className="text-white">Quản lý danh sách sản phẩm</h1>
            <p className="text-white">Giao diện nhập liệu và hiển thị danh sách sản phẩm một cách trực quan, rõ ràng</p>
        </header>
        <div className="d-flex">
            <div className="addProductForm bg-white d-flex flex-column me-3 rounded-3">
                <div className="d-flex flex-column mb-2 mt-2 p-2">
                    <h3>Thêm sản phẩm mới</h3>
                    <p className="text-secondary">Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách</p>
                </div>
                <div className="d-flex flex-column mb-2 mt-2 p-2">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="productName" id="productName" placeholder="Nhập tên sản phẩm"/>

                    <label htmlFor="category">Danh mục</label>
                    <select name="category" id="category">
                        <option value="Sách">Sách</option>
                        <option value="Áo">Áo</option>
                        <option value="Quần">Quần</option>
                    </select>

                    <label htmlFor="price">Giá</label>
                    <input type="text" name="price" id="price" placeholder="Nhập giá"/>

                    <label htmlFor="state">Trạng thái còn hàng</label>
                    <select name="state" id="state">
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                    </select>
                </div>
                <div className="d-flex mb-2 mt-2 gap-2 p-2">
                    <button className="btn btn-primary">Thêm sản phẩm</button>
                    <button className="btn btn-outline-secondary">Làm mới form</button>
                </div>
            </div>
            <div className="listProduct d-flex flex-column mb-2 bg-white rounded-3 ">
                <div className="p-2">
                    <h3>Danh sách sản phẩm</h3>
                    <p>Danh sách sản phẩm mẫu được hiển thi từ dữ liệu hẹ thống</p>
                </div>
                <table border="1">
                    <thead>
                        <td>STT</td>
                        <td>TÊN SẢN PHẨM</td>
                        <td>DANH MỤC</td>
                        <td>GIÁ</td>
                        <td>TRẠNG THÁI</td>
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
