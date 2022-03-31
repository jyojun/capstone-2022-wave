import Posts from "../elements/Posts"
import PostForm from "../elements/PostForm"

const { useEffect } = require("react")
const { default: axios } = require("axios")

const Board = () => {
    
    return (
        <>
        <PostForm />
        <Posts/>
        </>
    )
}

export default Board;