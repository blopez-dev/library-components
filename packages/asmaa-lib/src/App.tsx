import styled from 'styled-components';
import {MyButton} from "./components";

function App() {
    return(
        <Wrapper>
            <MyButton>Click Me!</MyButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin: 2rem;
  display: flex;
  justify-content: center;
`;

export default App;
