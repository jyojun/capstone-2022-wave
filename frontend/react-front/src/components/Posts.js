import react, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const callApi = async()=> {
        axios.get("/board").then((res) => {
        setPosts(res.data.result);
        })
    }
    console.log(posts);
    useEffect(() =>{
        callApi();
    }, [])
    return (
        <>
            <table>
                <tr>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                </tr>
                {posts.map(post =>
                    <>
                        <tr>
                            <td>{post.title}</td>
                            <td>{post.writer}</td>
                            <td>{post.createdAt}</td>
                        </tr>
                    </>
                )}
            </table>
        </>
    )
}

export default Posts