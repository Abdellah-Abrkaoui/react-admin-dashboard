import { DeleteOutline } from "@mui/icons-material";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from "react";



function UserList() {

    const [data, setData] = useState(userRows)

    const handelDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userImgName">
                        <img src={params.row.avatar} alt="" className="userImg" />
                        <span>{params.row.user}</span>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 140 },
        { field: 'transactions', headerName: 'Transactions', width: 190 },
        {
            field: 'action', headerName: 'Action', width: 190, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handelDelete(params.row.id)} />
                    </>
                )
            }
        },

    ];


    return (
        <div className="userList">
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

export default UserList
