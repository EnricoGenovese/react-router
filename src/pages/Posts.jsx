import { useState, useEffect } from "react";
import axios from "axios"

import Card from "../components/Card";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000"
const postsEndPoint = "/posts/";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    function getData() {
        axios.get(`${apiUrl}${postsEndPoint}`)
            .then((res) => {
                console.log(res.data);
                setPosts(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("API called");
            })
    }

    function deletePost(id) {
        axios.delete(apiUrl + postsEndPoint + id)
            .then((res) => {
                // console.log(res.data);
                getData();
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("Post deleted")
            })
    }
    return (
        <section className="container py-3">
            <div className="row gy-4">
                {posts.map((post) => (
                    <div className="col-12 col-md-6 col-lg-4"
                        key={post.id}>
                        <Card
                            data={post}
                            onDelete={() => deletePost(post.id)} />
                    </div>
                ))

                }
            </div>
        </section>
    )
}