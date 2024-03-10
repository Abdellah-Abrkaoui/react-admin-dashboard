import './productList.css'
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductList() {

    const [data, setData] = useState(productRows)

    const handelDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Name', width: 200, renderCell: (params) => {
                return (
                    <div className="productImgName">
                        <img src={params.row.img} alt="" className="productImg" />
                        <span>{params.row.name}</span>
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 140 },
        { field: 'price', headerName: 'Price', width: 190 },
        {
            field: 'action', headerName: 'Action', width: 190, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handelDelete(params.row.id)} />
                    </>
                )
            }
        },

    ];
  return (
    <div className='productList'>
      <DataGrid
                disableRowSelectionOnClick
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[8, 16]}
                checkboxSelection
            />
    </div>
  )
}

export default ProductList
