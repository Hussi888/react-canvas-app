import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`

export const PageContent = styled.div`
	display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 100vw;
  max-height: 100vh;
`

export const PageContentRight = styled.div`
	display: flex;
  flex-direction: row;
  flex: 2;
  max-width: 100vw;
  max-height: 100vh;
`

export const Outer = styled.div`
	padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
  `

// export const Outer = styled.div`
//   padding: 30px;
//   width: 250px;
// `
export const Message = styled.div`
  margin: 10px;
  padding: 10px;
  line-height: 1.4em;
`
export const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`
export const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 30px;
  // display: flex;
  // justify-content: center;
  align-items: center;
  background: #d30000;
  color: white;
  border-radius: 25%;
  opacity: 0.5;
`
export const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  background: cornflowerblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  padding: 10px 15px;
  background: cornflowerblue;
  color: white;
  border-radius: 3px;
  text-align: center;
  transition: 0.3s ease all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }
  &:active {
    background: #5682d2;
  }
`

  // const GlobalStyle = createGlobalStyle`
  //   body {
  //     margin: 0px;
  //     max-width: 100vw;
  //     max-height: 100vh;
  //     overflow: hidden;
  //     box-sizing: border-box;
  //     font-family: sans-serif;
  //   }
  //   *, :after, :before {
  //     box-sizing: inherit;
  //   }
  // `