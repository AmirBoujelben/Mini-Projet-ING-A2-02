import { useState } from "react";
import profileImg from "../assets/profile.png";

export const Profile = () => {
  const [Adresse, setAdresse] = useState("Sousse, Tunis");
  const [phone, setPhone] = useState("99 999 999");
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col justify-start items-center py-8 px-12 bg-white h-max shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <img
          className="h-40 w-auto rounded-full mb-6"
          src={profileImg}
          alt=""
        />
        <p className="text-2xl font-medium">Nom d'étudiant</p>
        <p>2éme cycle ingénieur</p>
        <p>Génie Logiciel</p>
        <button className="bg-transparent w-full py-3 px-10 mt-6 font-medium text-sm text-[#002b45] border border-[#002b45] hover:bg-[#002b45] hover:text-white transition-all ease-out">
          Changer votre photo
        </button>
      </div>

      <div className="flex-auto p-8 rounded bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <form>
          <div className="mb-4 bg-white">
            <h1 className="font-medium text-lg">Informations personnelles</h1>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">Nom d'étudiant(e)</label>
              <input
                type="text"
                placeholder="VOTRE NOM D'ETUDAINT"
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
              className="w-[49%] mt-1 px-6 py-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 mt-6 bg-white">
            <h1 className="font-medium text-lg">Sécurité</h1>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-medium">Mot de passe actuel</label>
            <input
              type="text"
              placeholder="Mot de passe actuel"
              className="w-[49%] mt-1 px-6 py-3 border border-gray-300 rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium">
                Confirmer votre nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="Confirmer votre nouveau mot de passe"
                className="mt-1 px-6 py-3 border border-gray-300 rounded"
              />
            </div>
          </div>

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
