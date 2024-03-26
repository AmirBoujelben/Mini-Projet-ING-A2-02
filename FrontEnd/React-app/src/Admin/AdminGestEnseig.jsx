import { useEffect, useState } from "react";
import { SkeletonTable } from "../SharedComponents/SkeletonTable";
import { TableContent } from "../SharedComponents/TableContent";
import { AddingUserForm } from "../SharedComponents/AddingUserForm";

export const AdminGestEnseig = () => {
  const [Enseignants, setEnseignants] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const OpeningForm = () => {
    setIsAddFormOpen(true);
  };

  const ClosingForm = () => {
    setIsAddFormOpen(false);
  };

  const getEnseignants = async () => {
    setIsPending(true);
    setTimeout(async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem("user"))
        const response = await fetch(
          "http://localhost:5700/admin/getAllEnseignants",
          {
            method: "GET",
            headers: {
              "authorization": `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setEnseignants(data.data);
          setIsPending(false);
        } else {
          setIsPending(false);
          console.log("Failed to fetch enseignant");
        }
      } catch (err) {
        console.log("Cannot fetch enseignant data", err);
      }
    }, 1000);
  };

  useEffect(() => {
    getEnseignants();
  }, []);

  return (
    <div className="mt-5 border-2 border-solid border-slate-700 pb-8">
      <div className="flex justify-between py-4 bg-slate-800 mb-7 px-5">
        <p className="text-2xl font-medium text-gray-200">
          Liste des Enseignants
        </p>
        <button
          className={`${
            isPending ? "bg-gray-400 cursor-not-allowed" : "bg-green-700"
          } flex justify-center items-center gap-2 px-4 py-[0.325rem] bg-green-700 rounded-sm cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
          disabled={isPending}
          onClick={OpeningForm}
        >
          <svg
            className="h-6 w-6"
            fill="#fff"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            id="add-user"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="secondary"
                d="M17,17h4m-2-2v4"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.75,
                }}
              ></path>
              <path
                id="primary"
                d="M13,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H15"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.75,
                }}
              ></path>
              <circle
                id="primary-2"
                data-name="primary"
                cx="11"
                cy="7"
                r="4"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.75,
                }}
              ></circle>
            </g>
          </svg>

          <p className="text-sm text-white">Ajouter un nouveau enseignant</p>
        </button>
      </div>
      <AddingUserForm isOpen={isAddFormOpen} onClose={ClosingForm} />
      {isPending ? <SkeletonTable /> : <TableContent data={Enseignants} />}
    </div>
  );
};
