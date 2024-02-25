import { Link } from "react-router-dom";
import issatLogo from "../assets/issatso_logo.jpg";

export const SideNavbar = () => {
  return (
    <div className="h-[100vh] w-[22vw] text-[#365B78]">
      <Link to={"/Accueil"}>
        <img
          className="mt-[2rem] mx-[1.5rem] h-[4rem] mb-[5rem] cursor-pointer"
          src={issatLogo}
          alt="Issat Logo"
        />
      </Link>

      <Link
        to={"/Accueil"}
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem] hover:translate-x-2 transition-all ease-in-out"
      >
        <svg
          className="icon glyph h-[1.5rem] w-[1.5rem]"
          fill="#365B78"
          width="64px"
          height="64px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#365B78"
          strokeWidth="0.00032"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.64"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z"></path>{" "}
          </g>
        </svg>
        <p>Accueil</p>
      </Link>
      <Link
        to={"/EmploiDeTemps"}
<<<<<<< HEAD
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem]	hover:translate-x-2 transition-all ease-in-out"
=======
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem] hover:translate-x-2 transition-all ease-in-out"
>>>>>>> origin/main
      >
        <svg
          className="h-[1.5rem] w-[1.5rem]"
          fill="#365B78"
          width="64px"
          height="64px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g fillRule="evenodd">
              <path d="M1439.667 1226.667H1333V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253Z"></path>{" "}
              <path d="M1386.333 1813.333C1180.467 1813.333 1013 1645.867 1013 1440c0-205.867 167.467-373.333 373.333-373.333 205.867 0 373.334 167.466 373.334 373.333 0 205.867-167.467 373.333-373.334 373.333m0-853.333c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480"></path>{" "}
              <path d="M1546.333 426.667H159.666v-160c0-29.44 24-53.334 53.334-53.334h160v53.334c0 29.44 23.894 53.333 53.333 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h746.667v53.334c0 29.44 23.894 53.333 53.334 53.333 29.44 0 53.333-23.893 53.333-53.333v-53.334h160c29.333 0 53.333 23.894 53.333 53.334v160Zm-53.333-320h-160V53.333C1333 23.893 1309.107 0 1279.667 0c-29.44 0-53.334 23.893-53.334 53.333v53.334H479.666V53.333C479.666 23.893 455.773 0 426.333 0 396.894 0 373 23.893 373 53.333v53.334H213c-88.213 0-160 71.786-160 160v1546.666h746.666v-106.666h-640V533.333h1386.667v320H1653V266.667c0-88.214-71.787-160-160-160Z"></path>{" "}
            </g>
          </g>
        </svg>
        <p>Emploi de temps</p>
      </Link>
      <Link
        to={"/ListeDesGroupes"}
<<<<<<< HEAD
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem]	hover:translate-x-2 transition-all ease-in-out"
=======
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem] hover:translate-x-2 transition-all ease-in-out"
>>>>>>> origin/main
      >
        <svg
          className="h-[1.45rem] w-[1.5rem]"
          fill="#365B78"
          width="64px"
          height="64px"
          viewBox="0 0 30.956 30.956"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g transform="translate(-481.972 -322.633)">
              <path d="M509.039,324.633a1.891,1.891,0,0,1,1.889,1.89V349.7a1.891,1.891,0,0,1-1.889,1.89H485.862a1.892,1.892,0,0,1-1.89-1.89V326.523a1.892,1.892,0,0,1,1.89-1.89h23.177m0-2H485.862a3.89,3.89,0,0,0-3.89,3.89V349.7a3.89,3.89,0,0,0,3.89,3.89h23.177a3.889,3.889,0,0,0,3.889-3.89V326.523a3.889,3.889,0,0,0-3.889-3.89Z"></path>{" "}
              <path d="M505.105,332.478H489.523a1,1,0,1,1,0-2h15.582a1,1,0,0,1,0,2Z"></path>
              <path d="M505.105,339.188H489.523a1,1,0,1,1,0-2h15.582a1,1,0,0,1,0,2Z"></path>
              <path d="M505.105,345.9H489.523a1,1,0,0,1,0-2h15.582a1,1,0,0,1,0,2Z"></path>
            </g>
          </g>
        </svg>
        <p>Liste des groupes</p>
      </Link>
      <Link
        to={"/SupportDuCours"}
<<<<<<< HEAD
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem]	hover:translate-x-2 transition-all ease-in-out"
=======
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem] hover:translate-x-2 transition-all ease-in-out"
>>>>>>> origin/main
      >
        <svg
          className="h-[1.5rem] w-[1.5rem]"
          fill="#365B78"
          width="64px"
          height="64px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#365B78"
          strokeWidth="0.4"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>books</title>{" "}
            <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z"></path>{" "}
          </g>
        </svg>
        <p>Support du cours</p>
      </Link>
      <Link
        to={"/NoteEtAbsence"}
<<<<<<< HEAD
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem]	hover:translate-x-2 transition-all ease-in-out"
=======
        className="flex flex-row px-[1.5rem] justify-start items-center gap-[0.75rem] p-[0.75rem] hover:translate-x-2 transition-all ease-in-out"
>>>>>>> origin/main
      >
        <svg
          className="h-[1.5rem] w-[1.5rem]"
          fill="#365B78"
          width="64px"
          height="64px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"></path>{" "}
          </g>
        </svg>
        <p>Notes & Absence</p>
      </Link>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/main
