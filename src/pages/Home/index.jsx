import { Container } from './styles';

import XboxImage from '../../assets/xbox-greenBG.png';

function Home () {
    return(
        <Container>
            <div className='text-container'>
                <h1>Xbox series X</h1>
                <h2>Pedido antecipado</h2>
            </div>
            <img className='xbox-image' src={XboxImage} alt="Topo do console Xbox series X com uma luz verde de fundo"></img>
        </Container>
    );
}

export default Home;
