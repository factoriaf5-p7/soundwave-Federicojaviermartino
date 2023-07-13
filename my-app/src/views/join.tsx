// import { createGlobalStyle } from 'styled-components'
import { styled } from "styled-components";

const Header = styled.header `
color: white;
display: flex;
flex-direction:column;
background-color: #202027;
margin-bottom: 500px;
& button {
    background-color:#1762A7;
    margin-left:50px;
}

.form {
    display:flex;
    flex-direction: column;
    margin-top: 50px;
}
`


export function Join() {

    return (
        <>
        <Header>
            <h1>Join the fun.</h1>
            <div className='form'>
                <form>
                    <ul>
                        <li>
                            Name:
                            <input></input>
                            Email:
                            <input></input>
                            Password:
                            <input></input>
                <button>
                    Join Now
                </button>
                        </li>
                    </ul>
                </form>
            </div>
        </Header>
        </>
    )
}

export default Join
