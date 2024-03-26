import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Card Component
const Card = ({ element, onEdit }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 hover:shadow-2xl">
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <div className="font-bold text-xl mb-2">{element.name}</div>
        <button 
          className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => onEdit(element)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

// ListOfCards Component
const ListOfCards = () => {
  const [elements, setElements] = useState([
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' },
    { id: 4, name: 'Element 4' },
    { id: 5, name: 'Element 5' },
    { id: 6, name: 'Element 6' },
    { id: 7, name: 'Element 7' },
    { id: 8, name: 'Element 8' },
    { id: 9, name: 'Element 9' },
    { id: 10, name: 'Element 10' },
    { id: 11, name: 'Element 11' },
    { id: 12, name: 'Element 12' },
    { id: 13, name: 'Element 13' },
    { id: 14, name: 'Element 14' },
    { id: 15, name: 'Element 15' },
    { id: 16, name: 'Element 16' },
    { id: 17, name: 'Element 17' },
    { id: 18, name: 'Element 18' },
    { id: 19, name: 'Element 19' },
    { id: 20, name: 'Element 20' }
    // Add more elements here up to 20
  ]);

  const [currentPage, setCurrentPage] = useState(0);

  const handleEdit = (element) => {
    // Handle edit action here
    console.log('Editing element: ', element);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(elements.length / PER_PAGE);

  return (
    <div className="">
      <div className="grid grid-rows-2 grid-cols-3">
        {elements
          .slice(offset, offset + PER_PAGE)
          .map((element) => (
            <Card key={element.id} element={element} onEdit={handleEdit} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={null}
        nextLabel={null}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={" flex items-center justify-center mt-6"}
        pageLinkClassName={"mx-1 px-3 py-2 bg-white text-sky-800 hover:bg-sky-800 hover:text-white rounded focus:bg-sky-800 focus:text-white rounded"}
        disabledClassName={"opacity-50 cursor-not-allowed"}        
        />
    </div>
  );
};

export default ListOfCards;
