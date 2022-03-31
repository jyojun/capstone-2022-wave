const Register = () => {
    return (
        <form action="/users/register" method="post">
            <table>
                <tr>
                    <td>닉네임 : </td>
                    <td><input type="text" name="userName"/></td>
                </tr>
                <tr>
                    <td>이메일 : </td>
                    <td><input type="text" name="userEmail"/></td>
                </tr>
                <tr>
                    <td>비밀번호 : </td>
                    <td><input type="password" name="password"/></td>
                </tr>
                <tr>
                    <td><input type="submit" value="회원가입"/></td>
                </tr>
            </table>
        </form>
    )
}

export default Register