import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { createGlobalStyle } from 'styled-components'

const Header = styled.header `
color:white;
display: flex;
& div {
    display:flex;
    margin-right: 50px;

}
& ul {
    display:flex;
    margin-left:800px;
}
`


export const Navbar = () => {
    return (
        <Header>
            <div>
                
                    <Link to= "/">
                    <img src="logo.png"></img>
                    </Link>
                    <p>Soundwave</p>
                
            </div>
            <ul>
                <li>
                    <Link to= "/discover">
                        Discover
                    </Link>
                </li>
                <li>
                    <Link to= "/join">
                        Join
                    </Link>
                </li>
            </ul>
        </Header>
    );
};
