import React, {useMemo} from 'react'
import './DataGrid.css'
import {userData} from '../../data/data.jsx'
import MaterialReactTable from 'material-react-table'
import {createTheme, ThemeProvider} from '@mui/material'

export const DataGrid = () => {

    const columns = useMemo(() => [
        {
            accessorKey: 'name.firstName',
            header: 'First Name',
        },
        {
            accessorKey: 'name.lastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'address',
            header: 'Address',
        },
        {
            accessorKey: 'city',
            header: 'City',
        },
        {
            accessorKey: 'state',
            header: 'State',
        },
    ], []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'dark'
        }
    }), [])

    return (
        <div className='table-container'>
            <ThemeProvider theme={theme}>
                <MaterialReactTable
                    columns={columns}
                    data={userData}/>
            </ThemeProvider>
        </div>
    )
}
