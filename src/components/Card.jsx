import { NavLink } from "react-router-dom";

export default function Card({ data }) {
    return (
        <div className="card">
            <img src={ } className="card-img-top" alt={ } />
            <div className="card-body">
                <h5 className="card-title">{ }</h5>
                <p className="card-text text-truncate">{ }</p>
                <NavLink to={id} className="btn btn-primary">Dettagli</NavLink>
            </div>
        </div>
    )
}