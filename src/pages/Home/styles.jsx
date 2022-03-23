import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    margin-top: 50px;


    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        position: absolute;
        top: 6rem;
        z-index: 1;


        h1 {
            font-size: 4.5rem;
            font-weight: 500; //medium 
        }

        h2 {
            color: var(--main-green);
            font-size: 1.1rem;
            font-weight: 600; //semi-bold
            letter-spacing: 1px;
            text-transform: uppercase;
        }
    }

    .xbox-image {
        width: 80%;

        margin-right: 48px;
    }

`;