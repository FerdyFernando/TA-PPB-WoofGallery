import { NavLink as NavLinkReactRouter } from "react-router-dom"

export const NavLink = ({to, className, children, ...props}) => {
    return (
        <NavLinkReactRouter
        {...props}
        className={({isActive}) => {return `${className} ${isActive ? 'text-white': 'text-slate-400'}`}} 
        to={to}>{children}
        </NavLinkReactRouter>
    )
}
