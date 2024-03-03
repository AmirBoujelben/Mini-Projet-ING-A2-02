const DisconnectPopUp = ({ isOpen, onClose, onDisconnect }) => {
  if (!isOpen) return null;

  const handleDisconnect = () => {
    onDisconnect();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-6">
        <h2 className="text-center text-lg font-semibold mb-8">
          Êtes-vous sûr de vouloir vous déconnecter ?
        </h2>
        <div className="flex justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 mr-2 rounded"
            onClick={handleDisconnect}
          >
            Déconnexion
          </button>
          <button
            className="bg-[#365B78] hover:bg-[#002b45] text-white font-medium py-2 px-4 rounded transition-all ease-out"
            onClick={onClose}
          >
            Retour au tableau de bord
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisconnectPopUp;
