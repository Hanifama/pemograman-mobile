import React from 'react';
import { DataGrid, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import Layout from '../layouts/Dashboard';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nama Kategori', width: 150 },
    { field: 'description', headerName: 'Deskripsi', width: 200 },
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

const rows = [
    { id: 1, name: 'Elektronik', description: 'Barang Elektronik' },
    { id: 2, name: 'Pakaian', description: 'Baju dan Celana' },
    { id: 3, name: 'Makanan', description: 'Produk Makanan' },
    { id: 4, name: 'Elektronik', description: 'Barang Elektronik' },
    { id: 5, name: 'Pakaian', description: 'Baju dan Celana' },
    { id: 6, name: 'Makanan', description: 'Produk Makanan' },
];

const handleAdd = (): void => {
    console.log('Tambah data');
};

const handleDetail = (id: number): void => {
    console.log('Detail data dengan ID:', id);
};

const handleEdit = (id: number): void => {
    console.log('Edit data dengan ID:', id);
};

const handleDelete = (id: number): void => {
    console.log('Hapus data dengan ID:', id);
};

const CategoryManagement: React.FC = () => {
    return (
        <Layout>
            <div className="p-5 w-full">
                {/* Button Tambah */}
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

                {/* Data Grid */}
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

export default CategoryManagement;
