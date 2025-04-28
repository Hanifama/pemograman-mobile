import React from 'react';
import { DataGrid, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import Layout from '../layouts/Dashboard';

// Kolom DataGrid
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nama User', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'actions',
        headerName: 'Aksi',
        width: 150,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <>
                <GridActionsCellItem
                    icon={<Visibility fontSize="small" />}
                    label="Detail"
                    onClick={() => handleDetail(params.id as number)}
                />
                <GridActionsCellItem
                    icon={<Edit fontSize="small" />}
                    label="Edit"
                    onClick={() => handleEdit(params.id as number)}
                />
                <GridActionsCellItem
                    icon={<Delete fontSize="small" />}
                    label="Hapus"
                    onClick={() => handleDelete(params.id as number)}
                />
            </>
        ),
    },
];

// Data untuk DataGrid
const rows = [
    { id: 1, name: 'Haris', email: 'haris@example.com' },
    { id: 2, name: 'Alya', email: 'alya@example.com' },
    { id: 3, name: 'Rizky', email: 'rizky@example.com' },
    { id: 4, name: 'Dina', email: 'dina@example.com' },
];

// Fungsi event handler
const handleAdd = (): void => {
    console.log('Tambah user');
};

const handleDetail = (id: number): void => {
    console.log('Detail user dengan ID:', id);
};

const handleEdit = (id: number): void => {
    console.log('Edit user dengan ID:', id);
};

const handleDelete = (id: number): void => {
    console.log('Hapus user dengan ID:', id);
};

const UserManagement: React.FC = () => {
    return (
        <Layout>
            <div className="p-5 w-full">
                {/* Tombol Tambah */}
                <div className="flex justify-end mb-4">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Add />}
                        onClick={handleAdd}
                    >
                        Tambah
                    </Button>
                </div>

                {/* DataGrid */}
                <div className="h-96 w-full">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pagination
                        disableRowSelectionOnClick
                    />
                </div>
            </div>
        </Layout>
    );
};

export default UserManagement;
