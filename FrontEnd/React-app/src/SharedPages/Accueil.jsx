

export const Accueil = () => {
  const user = JSON.parse(sessionStorage.getItem("user"))

  return (
    <div className="flex items-center">
      <p>Bienvenue cher {user.userEmail}</p>
    </div>
  )
}
