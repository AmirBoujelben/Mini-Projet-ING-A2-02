import React from 'react';

const Card = ({ name, onEdit }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 hover:shadow-2xl bg-white">
          <div className="px-6 py-4 flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2">{name}</div>
            <button 
              className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded"
              onClick={() => onEdit(name)}
            >
              Edit
            </button>
          </div>
        </div>
      );
};

const ListOfCards = ({ names, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {names.map((name, index) => (
        <Card key={index} name={name} onEdit={() => onEdit(name)} />
      ))}
    </div>
  );
};

export default ListOfCards;
