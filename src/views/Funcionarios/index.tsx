import React from 'react';
import Table from '@/components/Table';

export default function Funcionarios() {
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'position', label: 'Position', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'salary', label: 'Salary', sortable: true },                                                                            
  ];

  const data = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: 75000 },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product', salary: 85000 },
    { id: 3, name: 'Alice Johnson', position: 'UX Designer', department: 'Design', salary: 70000 },
    { id: 4, name: 'Bob Brown', position: 'Data Scientist', department: 'Data', salary: 95000 },
    { id: 5, name: 'Charlie White', position: 'HR Specialist', department: 'HR', salary: 60000 },
    { id: 6, name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: 75000 },
    { id: 7, name: 'Jane Smith', position: 'Product Manager', department: 'Product', salary: 85000 },
    { id: 8, name: 'Alice Johnson', position: 'UX Designer', department: 'Design', salary: 70000 },
    { id: 9, name: 'Bob Brown', position: 'Data Scientist', department: 'Data', salary: 95000 },
    { id: 10, name: 'Charlie White', position: 'HR Specialist', department: 'HR', salary: 60000 },
    { id: 11, name: 'Charlie White', position: 'HR Specialist', department: 'HR', salary: 60000 },
    { id: 12, name: 'Charlie White', position: 'HR Specialist', department: 'HR', salary: 60000 },

];

  return (
    <div className='px-8'>
      <Table columns={columns} data={data} />
    </div>
  );
}