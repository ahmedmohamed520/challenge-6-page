import { styled } from "styled-components";
import { notifications } from "./data";
import Notification from "./Notification";

function App() {
    return (
        <Wrapper>
            <div className="header">
                <div className="notifications">
                    Notifications
                    <span className="num">3</span>
                </div>
                <a href="/" className="link">
                    Mark all as read
                </a>
            </div>
            <div className="container">
                {notifications.map((notification) => {
                    return <Notification key={notification.id} {...notification} />;
                })}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    background-color: #fff;
    width: 1000px;
    max-width: 90vw;
    margin: 50px auto;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(50, 50, 50, 0.05);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .notifications {
        font-weight: 800;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
    .notifications span {
        color: #fff;
        background-color: var(--clr-blue);
        border-radius: 5px;
        padding: 3px 8px;
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 500;
    }
    .link {
        color: var(--clr-gray-5);
        font-size: 0.9rem;
        transition: 0.2s all;
    }
    .link:hover,
    .link:active {
        color: var(--clr-blue);
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        max-width: 100%;
        margin: 0;
        border-radius: 0;
        box-shadow: 0;
    }
`;

export default App;
