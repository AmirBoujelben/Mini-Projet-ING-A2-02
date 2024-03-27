
export const TableContent = ({ data }) => {
  return (
    <table className="min-w-[97%] divide-y divide-gray-200 mx-auto">
      <thead className="bg-gray-200">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
          >
            Matricule
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
          >
            Nom
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
          >
            Num Telephone
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((user, i) => (
          <tr key={i + 1}>
            <td className="px-6 py-4 whitespace-nowrap">{user.matricule}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {user.nom} {user.prenom}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.numTel}</td>
            <td className="flex justify-start gap-8 items-center px-6 py-4 whitespace-nowrap">
              <svg
                className="w-7 h-7 cursor-pointer"
                fill="#000"
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                id="edit-user"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M20.71,16.09,15.8,21H13V18.2l4.91-4.91a1,1,0,0,1,1.4,0l1.4,1.4A1,1,0,0,1,20.71,16.09Z"
                ></path>
                <circle
                  cx="11"
                  cy="7"
                  r="4"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></circle>
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M11,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H9"
                ></path>
              </svg>

              <svg
                className="h-6 w-6 cursor-pointer"
                fill="#000000"
                height="64px"
                width="64px"
                viewBox="0 0 489.7 489.7"
                stroke="#000000"
                strokeWidth="0.004897"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M411.8,131.7c-9.5,0-17.2,7.7-17.2,17.2v288.2c0,10.1-8.2,18.4-18.4,18.4H113.3c-10.1,0-18.4-8.2-18.4-18.4V148.8c0-9.5-7.7-17.2-17.1-17.2c-9.5,0-17.2,7.7-17.2,17.2V437c0,29,23.6,52.7,52.7,52.7h262.9c29,0,52.7-23.6,52.7-52.7V148.8C428.9,139.3,421.2,131.7,411.8,131.7z"></path>
                      <path d="M457.3,75.9H353V56.1C353,25.2,327.8,0,296.9,0H192.7c-31,0-56.1,25.2-56.1,56.1v19.8H32.3c-9.5,0-17.1,7.7-17.1,17.2s7.7,17.1,17.1,17.1h425c9.5,0,17.2-7.7,17.2-17.1C474.4,83.5,466.8,75.9,457.3,75.9z M170.9,56.1c0-12,9.8-21.8,21.8-21.8h104.2c12,0,21.8,9.8,21.8,21.8v19.8H170.9V56.1z"></path>
                      <path d="M262,396.6V180.9c0-9.5-7.7-17.1-17.1-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1C254.3,413.7,262,406.1,262,396.6z"></path>
                      <path d="M186.1,396.6V180.9c0-9.5-7.7-17.1-17.2-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1C178.4,413.7,186.1,406.1,186.1,396.6z"></path>
                      <path d="M337.8,396.6V180.9c0-9.5-7.7-17.1-17.1-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1S337.8,406.1,337.8,396.6z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
