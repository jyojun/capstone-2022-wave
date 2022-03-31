import react, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Login = () => {
    const [session, setSession] = useState({})
    const callApi = async()=> {
        axios.get("/users/login").then((res) => {
        setSession(res.data.session);
        })
    }
    useEffect(()=>{
        callApi();
        console.log(session);
    },[])

    const onLogout = (e) => {
        e.preventDefault();
        axios.get("/users/logout");
        console.log("로그아웃 되었습니다.");
        setSession({});
        console.log(session);
    }
    return (
        <div>{ Object.keys(session).length > 0 ? 
            <>
            <h3>환영합니다.</h3>
            <form onSubmit={onLogout} action="users/logout" method="get">
                <input  type="submit" value="로그아웃"></input>
            </form>
            </>
        : (
            
            <form onSubmit={callApi} action="/users/login" method="post">
                <table>
                    <tr>
                        <td>이메일 : </td>
                        <td><input type="text" name="userEmail"/></td>
                    </tr>
                    <tr>
                        <td>비밀번호 : </td>
                        <td><input type="password" name="password"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="로그인"/></td>
                    </tr>
                </table>
            </form>
        )}</div>
    )
}

export default Login;