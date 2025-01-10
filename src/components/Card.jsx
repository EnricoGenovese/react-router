import { Link } from "react-router-dom";

export default function Card({ data, onDelete }) {


    return (
        <div className="card">
            <img src={data.img} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text-truncate">{data.content}</p>
                <p className="card-text text-truncate">{data.tags}</p>
                <Link to={`/posts/${data.id}`} className="btn btn-primary">Dettagli</Link>
                <button key={data.id}
                    onClick={onDelete}
                    className="btn btn-danger mx-2">
                    Cancella
                </button>
            </div>
        </div>
    )
}