import './product.css'
import { productData } from '../../dummyData'
import Chart from '../../Components/chart/Chart'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'



function Product() {
    return (
        <div className='product'>
            <div className="TopWrapper">
                <h1 className="productTitle">Edite product</h1>
                <div className="secondWrapper">
                    <Link to="/newProduct"><button className='editproduct'>Create</button></Link>
                </div>
            </div>



            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} title="Sales Performance" dataKey="Sales" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/src/assets/shirt-1.jpg" alt="" className="productImg" />
                        <span className="productName">T-shirt Summer</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoBottomItem">
                            <span className='infokey'>id :</span>
                            <span className='infovalue'>123</span>
                        </div>
                        <div className="productInfoBottomItem">
                            <span className='infokey'>sales :</span>
                            <span className='infovalue'>1723</span>
                        </div>
                        <div className="productInfoBottomItem">
                            <span className='infokey'>active :</span>
                            <span className='infovalue'>yes</span>
                        </div>
                        <div className="productInfoBottomItem">
                            <span className='infokey'>in Stock :</span>
                            <span className='infovalue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
            <span className="EditProductInfosTitle">Edit</span>
                    <div className="EditProductInfosWrapper">
                        <div className="leftwrapper">
                            <form className="leftwrapperForm">
                                <div className="formItems">
                                    <label>Product</label>
                                    <input type="text" placeholder='T-shirt Summer'/>
                                </div>
                                <div className="formItems">
                                    <label>Price</label>
                                    <input type="text" placeholder='$2,345.00'/>
                                </div>
                                <div className="formItems">
                                    <label>in Stock</label>
                                    <select name="inStock" id="inStock">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="formItems">
                                    <label>Active</label>
                                    <select name="active" id="active">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="rightwrapper">
                            <div className="ImageContainer">
                                <img src="/src/assets/shirt-1.jpg" alt="" className='rightImg' />
                                <input type="file"  id='file' style={{display : "none"}}/>
                                <label htmlFor="file" className='updateIcon'><DriveFolderUploadOutlined /></label>
                            </div>
                            <button className='UpdateUserBtn'>Update</button>
                        </div>

                    </div>
            </div>

        </div>

    )
}

export default Product
