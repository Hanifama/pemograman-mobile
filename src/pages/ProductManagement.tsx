import React from 'react';
import { DataGrid, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import Layout from '../layouts/Dashboard';

// Kolom DataGrid
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nama Produk', width: 150 },
    { field: 'price', headerName: 'Harga', width: 120 },
    { field: 'category', headerName: 'Kategori', width: 150 },
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
    { id: 1, name: 'Laptop', price: 'Rp 10.000.000', category: 'Elektronik' },
    { id: 2, name: 'Kaos Polos', price: 'Rp 50.000', category: 'Pakaian' },
    { id: 3, name: 'Coklat', price: 'Rp 20.000', category: 'Makanan' },
    { id: 4, name: 'Smartphone', price: 'Rp 5.000.000', category: 'Elektronik' },
    { id: 5, name: 'Celana Jeans', price: 'Rp 150.000', category: 'Pakaian' },
];

// Fungsi event handler
const handleAdd = (): void => {
    console.log('Tambah produk');
};

const handleDetail = (id: number): void => {
    console.log('Detail produk dengan ID:', id);
};

const handleEdit = (id: number): void => {
    console.log('Edit produk dengan ID:', id);
};

const handleDelete = (id: number): void => {
    console.log('Hapus produk dengan ID:', id);
};

const ProductManagement: React.FC = () => {
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

export default ProductManagement;
