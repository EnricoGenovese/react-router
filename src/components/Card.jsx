import { NavLink } from "react-router-dom";

export default function Card({ data }) {
    return (
        <div className="card">
            <img src={data.img} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text-truncate">{data.content}</p>
                <p className="card-text text-truncate">{data.tags.join(", ")}</p>
                {/* <NavLink to={id} className="btn btn-primary">Dettagli</NavLink> */}
            </div>
        </div>
    )
}