import { styled } from "styled-components"


const Header = styled.header`
color: white;
display: flex;
margin-top:170px;
& button {
background-color:#1762A7;
color:white;
& div {
  display:flex;
}
}
`

const Picture = styled.picture`
display:flex;
margin-right:10px;
font-size-adjust:50%;
`
const Father = styled.div`
display:flex;
`

export function HomePage() {

  return (
    <>
    <Father>
      <Picture>
        <img className='landing-page-girl' src='landing-page-girl.png'></img>
      </Picture>
      <Header>
        <div>
          <h1>
            Feel The Music
          </h1>
          <p>
            Stream over 20 thousand songs with one click
          </p>
          <button>
            Join Now
          </button>
        </div>
      </Header>
    </Father>
    </>
  )
}
