import React, { useState } from 'react';
import { TableSection, TableWrapper, TableHeader, TableRow, TableCell, TableBody, TableFooter, ButtonOutlined, ComponentWrapper } from './styles';
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string; 

}

interface TableProps {
  columns: Column[];
  data: Array<{ [key: string]: string | number | boolean | null }>;
}

export default function Table({ columns, data }: TableProps) {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (aValue === null || bValue === null) {
        return aValue === bValue ? 0 : aValue === null ? 1 : -1;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return direction === 'asc' ? (aValue === bValue ? 0 : aValue ? -1 : 1) : (aValue === bValue ? 0 : aValue ? 1 : -1);
      }

      return 0; // Fallback for unsupported types
    });

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const gridTemplateColumns = columns.map((column) => column.width || '1fr').join(' ');
  console.log('gridTemplateColumns', gridTemplateColumns);
  return (
    <ComponentWrapper>
    <TableWrapper>
      <TableHeader>
        <TableRow  style={{ gridTemplateColumns }}>
          {columns.map((column) => (
            <TableCell
              as="th"
              key={column.key}
              onClick={() => column.sortable && handleSort(column.key)}
              style={{ cursor: column.sortable ? 'pointer' : 'default' }}
            >
              {column.label} {sortConfig?.key === column.key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableSection>
          {paginatedData.map((item, index) => (
            <TableRow key={index} style={{ gridTemplateColumns }} >
              {columns.map((column) => (
                <TableCell key={column.key}>{item[column.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableSection>
      </TableBody>
    </TableWrapper>
    <TableFooter>
      <div>
        <ButtonOutlined onClick={handlePrevPage} disabled={currentPage === 1}>
                Anterior
        </ButtonOutlined>
      </div>
      <span>
              Página {currentPage} de {totalPages}
      </span>
      <div>
        <ButtonOutlined onClick={handleNextPage} disabled={currentPage === totalPages}>
            Proximo
        </ButtonOutlined>
      </div>
    </TableFooter>
    </ComponentWrapper>
  );
}