import { createGlobalStyle } from 'styled-components'
import { styled } from "styled-components";


const Section = styled.section`
color: white;
display:flex;
margin-top: 100px;
margin-left:200px;
margin-bottom:200px;
& p {
  display:flex;
  margin-top
}
.content {
  flex-direction: column;
  display:flex;
}
`

const Main = styled.main`
display:flex;
.iconos {
  display:flex;
}
`




export function Discover() {
  return (
    <>
      <Main>
        <Section>
          <div className='content'>
            <h1>Discover new music</h1>
            <div className='iconos'>
              <div>
                <img src='microphone.svg'></img>
                <p>Charts</p>
              </div>
              <div>
                <img src='albums.svg'></img>
                <p>Albums</p>
              </div>
              <div>
                <img src='more.svg'></img>
                <p>More</p>
              </div>
            </div>
            <p>
              By joining you can benefit by listening to the latest albums released.
            </p>
          </div>
        <img src='covers.jpg'></img>
      </Section>
    </Main >
    </>
  )
}
