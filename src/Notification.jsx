import React from "react";
import { styled } from "styled-components";

const Notification = ({
    name,
    action,
    post,
    since,
    location,
    message,
    commentedPicture,
    authorImg,
    recent,
}) => {
    return (
        <Wrapper href="/" className={recent && "recent"}>
            <div className="img">
                <img src={authorImg} alt={name} width="40" height="40" />
            </div>
            <div className="notification-body">
                <div className="notification-info">
                    <div className="notification-title">
                        <a href="/" className="notification-link">
                            {name}
                        </a>{" "}
                        <span className="action">{action}</span>{" "}
                        {location && (
                            <a href="/" className="location">
                                {location}
                            </a>
                        )}
                        {post && (
                            <a href="/" className="post">
                                {post}
                            </a>
                        )}
                        {recent && <span className="recent"></span>}
                    </div>
                    <div className="duration">{since}</div>
                    {message && <div className="message">{message}</div>}
                </div>
                {commentedPicture && (
                    <a href="/" className="commented-img">
                        {<img src={commentedPicture} width="40" height="40" />}
                    </a>
                )}
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.a`
    display: flex;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    gap: 1rem;
    &:last-of-type {
        margin-bottom: 0;
    }

    .notification-body {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .notification-link {
        color: #000;
        font-weight: 800;
        transition: 0.2s all;
    }
    .notification-link:hover,
    .notification-link:active {
        color: var(--clr-blue);
    }
    .action {
        color: var(--clr-gray-5);

        font-weight: 500;
        margin-left: 2px;
        margin-right: 2px;
    }
    .post {
        font-weight: 800;
        color: var(--clr-gray-5);
    }

    .post:hover,
    .post:active {
        color: var(--clr-blue);
    }
    .recent {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: var(--clr-red);
        margin-left: 5px;
    }
    .duration {
        color: var(--clr-gray-4);
        font-size: 0.9rem;
        margin-top: 2px;
    }
    .message {
        border: 1px solid var(--clr-gray-3);
        padding: 1rem;
        color: var(--clr-gray-5);
        margin-top: 1rem;
        border-radius: 5px;
        transition: 0.2s all;
    }
    .message:hover {
        background-color: var(--clr-gray-2);
    }
    .location {
        color: var(--clr-blue);
        font-weight: 800;
    }
`;

export default Notification;
