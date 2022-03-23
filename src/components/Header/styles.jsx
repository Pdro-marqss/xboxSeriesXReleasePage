import styled from 'styled-components';

export const Header_container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 160px;

    height: 120px;

    .logo-link {
        display: flex;
    }

    .logo {
        width: 125px;
        margin-left: -28px;
        margin-right: 28px;
    }.logo:hover {
        filter: brightness(.8);
    }

    ul {
        display: flex;
        gap: 40px;

        list-style: none;
    }

    ul li a {
        color: var(--light);
        font-size: .9rem;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
    } ul li a:hover {
        color: var(--gray-light);
    }

    .btn {
        padding: 18px 25px;

        font-size: .8rem;
        font-weight: bold;
        color: var(--black);
        text-transform: uppercase;

        background-color: var(--main-green);

        border: none;

        cursor: pointer;
    }.btn:hover {
        box-shadow: 3px 3px 10px #558700;
    }
`; 