import { useState } from "react";
import profileImg from "../assets/profile.jpg";

export const Profile = () => {
  const [Adresse, setAdresse] = useState("Sousse, Tunis");
  const [phone, setPhone] = useState("99 999 999");
  const user =JSON.parse(sessionStorage.getItem("user"))

  //!handling image upload
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  //!handling password verification
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    newPassword !== confirmPassword
      ? setPasswordsMatch(false)
      : setPasswordsMatch(true);
  };

  return (
    <div className="flex gap-6 max-lg:flex-wrap">
      <div className="max-lg:w-full flex flex-col justify-start items-center py-8 px-12 bg-white h-max shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <img
          className="h-40 w-40 rounded-full object-cover mb-6"
          src={selectedImage ? selectedImage : profileImg}
          alt=""
        />
        <p className="text-2xl font-medium">Nom d'{user.userRole}</p>
        <p>2éme cycle ingénieur</p>
        <p>Génie Logiciel</p>
        <label
          htmlFor="upload-input"
          className="bg-transparent py-3 px-10 mt-6 font-medium text-sm text-[#002b45] border border-solid border-[#002b45] hover:bg-[#002b45] hover:text-white transition-all ease-out cursor-pointer"
        >
          Changer votre photo
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div className="flex-auto p-8 rounded bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-white">
            <h1 className="font-medium text-lg">Informations personnelles</h1>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">Nom d'{user.userRole}</label>
              <input
                type="text"
                placeholder="VOTRE NOM"
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
                disabled
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="VOTRE.EMAIL@gmail.com"
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">Date de naissance</label>
              <input
                type="text"
                placeholder="25/06/1999"
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
                disabled
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">Adresse</label>
              <input
                type="text"
                value={Adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-medium">Numéro de téléphone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="max-md:w-full w-[49%] mt-1 px-6 py-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 mt-6 bg-white">
            <h1 className="font-medium text-lg">Sécurité</h1>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-medium">Mot de passe actuel</label>
            <div className="relative w-[49%] max-md:w-full">
              <svg
                style={{ display: showPassword ? "block" : "none" }}
                onClick={() => setShowPassword(false)}
                className="cursor-pointer h-6 w-6 absolute right-6 top-[50%] translate-y-[-40%]"
                fill="#000000"
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
                  <path
                    d="M960 1489.82c-348.474 0-668.545-202.323-841.298-529.918C291.455 632.306 611.526 429.984 960 429.984s668.545 202.322 841.298 529.918C1628.545 1287.497 1308.474 1489.82 960 1489.82Zm948.342-553.552C1720.645 558.648 1357.332 324 960 324c-397.333 0-760.645 234.648-948.342 612.268L0 959.902l11.658 23.634c187.697 377.62 551.01 612.268 948.342 612.268 397.333 0 760.645-234.648 948.342-612.268L1920 959.902l-11.658-23.634ZM960 1171.869c-116.9 0-211.967-95.067-211.967-211.967 0-116.9 95.067-211.967 211.967-211.967 116.9 0 211.967 95.067 211.967 211.967 0 116.9-95.067 211.967-211.967 211.967m0-529.918c-175.297 0-317.951 142.654-317.951 317.951 0 175.297 142.654 317.95 317.951 317.95 175.297 0 317.951-142.653 317.951-317.95S1135.297 641.951 960 641.951"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>

              <svg
                style={{ display: showPassword ? "none" : "block" }}
                onClick={() => setShowPassword(true)}
                className="cursor-pointer h-6 w-6 absolute right-6 top-[50%] translate-y-[-40%]"
                fill="#A8A3AF"
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
                  <path
                    d="M1591.462 544.364c129.295 100.893 238.985 236.548 316.774 392.233L1920 960.23l-11.658 23.634c-187.797 377.713-551.097 612.353-948.31 612.353-111.385 0-220.227-18.546-323.876-55.003l35.186-99.94c92.203 32.43 189.386 48.963 288.69 48.963 348.463 0 668.417-202.422 841.164-529.795-69.735-131.839-164.48-246.404-274.912-332.46ZM959.968 430.361c99.41 0 196.487 16.533 290.492 49.6 27.555 8.69 55.321 19.711 82.982 32.005l-189.704 189.705c-52.142-36.988-115.2-59.35-183.77-59.35-175.291 0-317.94 142.65-317.94 317.941 0 68.57 22.362 131.627 59.349 183.77l-212.703 212.596c-30.734-18.547-62.21-39.319-94.852-64.012-110.537-86.056-205.283-200.727-275.124-332.46C291.55 632.677 611.61 430.361 959.968 430.361Zm181.968 422.861c18.653 31.582 29.993 67.827 29.993 107.04 0 116.896-95.065 211.96-211.96 211.96-39.107 0-75.459-11.34-106.935-29.992l288.902-289.008Zm-181.968-104.92c39.213 0 75.458 11.446 107.04 29.992L778 1067.302c-18.546-31.582-29.992-67.827-29.992-107.04 0-116.79 95.064-211.96 211.96-211.96Zm0 529.9c175.397 0 317.94-142.543 317.94-317.94 0-68.463-22.361-131.627-59.242-183.663l573.67-573.671L1717.408 128l-304.905 304.905c-43.027-21.408-86.373-40.273-128.66-53.52-103.542-36.457-212.49-55.004-323.875-55.004-397.213 0-760.62 234.64-948.204 612.354L0 960.368l11.764 23.634c77.79 155.685 187.479 291.34 317.516 392.656 28.403 21.514 55.64 40.167 82.24 57.23l-283.814 283.814 74.928 74.928 573.67-573.67c52.037 36.88 115.095 59.243 183.664 59.243"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe actuel"
                className="w-full mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">
                Confirmer votre nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="Confirmer votre nouveau mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          {!passwordsMatch && (
            <p className="text-red-500 text-sm font-lightt">
              Les mots de passe ne correspondent pas.
            </p>
          )}

          <div className="mt-6 flex gap-6">
            <button
              type="submit"
              className="bg-[#365B78] py-3 px-10 font-medium text-sm text-white border border-stone-200 hover:bg-[#002b45] transition-all ease-out"
            >
              Sauvegarder les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
