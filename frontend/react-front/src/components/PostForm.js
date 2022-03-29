import react from "react";

const PostForm = () => {
    return (
        <>
            <form action="board" method="POST">
                <table>
                    <tr>
                        <td><input type="text" name="inputTitle" placeholder="제목을 입력하세요."/></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="inputWriter" placeholder="작성자를 입력하세요."/></td>
                    </tr>
                </table>
                <input type="submit" value="전송"/>
            </form>
        </>
    )
}

export default PostForm