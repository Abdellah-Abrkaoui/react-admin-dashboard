import './newProduct.css'

function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
      <div className="newProductItems">
          <label>Image</label>
          <input type="file" style={{border : 0}} />
        </div>
        <div className="newProductItems">
          <label>Name</label>
          <input type="text" placeholder='T-shirt Summer' />
        </div>
        <div className="newProductItems">
          <label>Price</label>
          <input type="text" placeholder='$2,345.00' />
        </div>
        <div className="newProductItems">
          <label>Stock</label>
          <input type="text" placeholder='123' />
        </div>
        <div className="newProductItems">
          <label>Active</label>
          <select name="active" id="active" className='newProductSelect'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className='newProductbtn'>Create Product</button>
      </form>
    </div>
  )
}

export default NewProduct
