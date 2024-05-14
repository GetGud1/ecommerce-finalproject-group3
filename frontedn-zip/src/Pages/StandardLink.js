import { NavLink } from "react-router-dom"

function StandardLink({path, name}) {
  return (
    <NavLink to={path} className="font-semibold text-xl text-blue-700 hover:text-blue-900 hover:underline transition-all ease-in-out">{name}</NavLink>
  )
}

export default StandardLink