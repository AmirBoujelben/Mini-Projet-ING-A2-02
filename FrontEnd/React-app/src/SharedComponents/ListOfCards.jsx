import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Card Component
const Card = ({ department, onEdit }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{department.name}</div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onEdit(department)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

// ListOfCards Component
const ListOfCards = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
    { id: 4, name: 'Department 4' },
    { id: 5, name: 'Department 5' },
    { id: 6, name: 'Department 6' },
    { id: 7, name: 'Department 7' },
    { id: 8, name: 'Department 8' },
    { id: 9, name: 'Department 9' },
    { id: 10, name: 'Department 10' },
    { id: 11, name: 'Department 11' },
    { id: 12, name: 'Department 12' },
    { id: 13, name: 'Department 13' },
    { id: 14, name: 'Department 14' },
    { id: 15, name: 'Department 15' },
    { id: 16, name: 'Department 16' },
    { id: 17, name: 'Department 17' },
    { id: 18, name: 'Department 18' },
    { id: 19, name: 'Department 19' },
    { id: 20, name: 'Department 20' }
    // Add more departments here up to 20
  ]);

  const [currentPage, setCurrentPage] = useState(0);

  const handleEdit = (department) => {
    // Handle edit action here
    console.log('Editing department: ', department);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(departments.length / PER_PAGE);

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {departments
          .slice(offset, offset + PER_PAGE)
          .map((department) => (
            <Card key={department.id} department={department} onEdit={handleEdit} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center justify-center"}
        pageLinkClassName={"mx-1 px-3 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded focus:bg-blue-500 focus:text-white rounded"}
        previousLinkClassName={"mx-1 px-3 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded"}
        nextLinkClassName={"mx-1 px-3 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
        />
    </div>
  );
};

export default ListOfCards;
