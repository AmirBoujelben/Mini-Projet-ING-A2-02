import { useState } from "react";

export const AddingDepForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nomDepartement: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const user = JSON.parse(sessionStorage.getItem("user"));
      const response = await fetch("http://localhost:5700/departement/createdepartement", {
        method: "POST",
        headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        console.log("Department created successfully:", responseData);
        setFormData({
          nomDepartement: "",
          
        });
        onClose();
      } else {
        console.log("Failed to create department:", responseData.message);
        // Handle error feedback to the user, such as showing an alert
      }
    } catch (error) {
      console.error("Error creating department:", error);
      // Handle error feedback to the user, such as showing an alert
    }
  };

  return (
    <div className="z-50 fixed inset-0">
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>
      <div className="z-10 w-full max-w-xl p-6 mx-auto bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Formulaire d'ajout department
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 11-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">
              Informations du département
            </h2>
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom du département:
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="py-2 px-2 mt-1 block w-full border border-solid border-gray-400 rounded-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 inline-flex justify-center py-2 px-8 border border-transparent text-sm font-medium rounded text-gray-700 bg-gray-300 hover:bg-gray-200 transition-all ease-out"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-8 border border-transparent text-sm font-medium rounded text-white bg-[#365B78] hover:bg-[#002b45] transition-all ease-out"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};
