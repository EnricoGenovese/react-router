import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
const postsEndPoint = "/posts/";

export default function AddPost() {

    const newPost = {
        title: "",
        content: "",
        img: "",
        tags: "",
    }

    const [formData, setFormData] = useState(newPost)

    function handleInput(event) {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        // newId = posts.reduce((curr, next) => curr.id < next.id ? next : curr).id + 1
        axios.post(apiUrl + postsEndPoint, formData)
            .then((res) => {
                console.log(res.data);

            })
    }

    return (
        <>
            <section className="container form row" onSubmit={handleSubmit}>
                <h2>Inserisci un nuovo post</h2>
                <form className="col-12">
                    <label htmlFor="title">Titolo del post</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="title"
                        aria-describedby="titleHelp"
                        value={formData.title}
                        onChange={handleInput}
                        name="title"
                        required
                    />
                    <label htmlFor="content">Contenuto del post</label>
                    <textarea
                        type="text"
                        className="form-control my-2"
                        rows="3"
                        id="content"
                        aria-describedby="contentHelp"
                        value={formData.content}
                        onChange={handleInput}
                        name="content"
                        required
                    />
                    <label htmlFor="img">Immagine del post</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="img"
                        aria-describedby="imgHelp"
                        value={formData.img}
                        onChange={handleInput}
                        name="img"
                        required />
                    <label htmlFor="tags">Tags del post</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="tags"
                        aria-describedby="tagsHelp"
                        value={formData.tags}
                        onChange={handleInput}
                        name="tags"
                        required />
                    <button type="submit" className="btn btn-success my-3">
                        Pubblica
                    </button>
                </form>
            </section>
            <ul></ul>
        </>
    )
}