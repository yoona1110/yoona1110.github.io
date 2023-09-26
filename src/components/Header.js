import { useState } from "react";
import styled from "styled-components";

const Header = () => {
    const menuItem = ["Home", "Category", "About", "Search"];
    const [mouseOver, setMouseOver] = useState(null);

    return (
        <Container>
            <SubContainer>
                <BlogName> Heo's 공부방 </BlogName>
                <Menu>
                    {menuItem.map((item, idx) => (
                        <MenuDetail 
                            key={idx}
                            onMouseOver={() => setMouseOver(idx)}
                            onMouseOut={() => setMouseOver(null)}
                            isMouseOver={mouseOver === idx}
                        >
                            {item}
                        </MenuDetail>
                    ))}
                </Menu>
            </SubContainer>
            <Line/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const SubContainer = styled.div`
    display: flex;
    flexDirection: row;
    align-items: center;
    padding: 4px 30px;
`;
const BlogName = styled.p`
    color: #070582;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-right: 0;
`;
const MenuDetail = styled.div`
    margin-left: 60px;
    padding: 0 5px 6px 5px;
    transition: box-shadow 0.4s ease;
    box-shadow: ${(props) => props.isMouseOver
                ? "0px 4px 0px 0px #070582"
                : "0px transparent"
    };
    color: #070582;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
`;
const Line = styled.hr`
    margin: 0 auto;
    width: 100vw;
    height: 1px;
    background-color: #070582;
`;
export default Header;