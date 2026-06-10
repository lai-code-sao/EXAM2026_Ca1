import React from "react";

function ProductForm(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            productName: e.target.querySelector('input').value,
            category: e.target.querySelector('input[name="category"]').value,
            price: e.target.querySelector('input[name="price"]').value,
            state: "Còn hàng",
        };
        
        if (e.target.querySelector('input').value.trim() === '') {
            alert('Vui lòng nhập tên sản phẩm!');
            return;
        }
        else {
            props.onAddProduct(newProduct);
        }
        e.target.reset();
    };
    return (
            <form className="addProductForm bg-white d-flex flex-column me-3 rounded-3" onSubmit={handleSubmit}>
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
                    <button className="btn btn-primary" type="submit" >Thêm sản phẩm</button>
                    <button className="btn btn-outline-secondary">Làm mới form</button>
                </div>
            </form>
    );
}
export default ProductForm