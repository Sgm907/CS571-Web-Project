import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import LoreTypes from "../enums/VariantEnum";
import LoreCard from "../components/cards/LoreCard";
import Style from "../SiteThemes";
import CharacterEnum from "../enums/CharacterEnum";
import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"
import card5 from "../img/card5.png"
import card6 from "../img/card6.png"
import card7 from "../img/card7.png"
import card8 from "../img/card8.png"


function LorePage() {
    return (
        <Container fluid style={Style.Background}>
            <Row id="cards">
                <Col>
                    <div className="mb-4">
                        <LoreCard title="The Kingdom" text="The world we're trying to save." imageSrc={card1} type={LoreTypes.WORLD} charKey={CharacterEnum.WORLD_1} />
                    </div>
                    <LoreCard title="The Void" text="Once there was only the void." imageSrc={card2} type={LoreTypes.WORLD} charKey={CharacterEnum.WORLD_2} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="The Protagonist" text="You" imageSrc={card3} type={LoreTypes.ALLY} charKey={CharacterEnum.MAIN_CHAR} />
                    </div>
                    <LoreCard title="The Antagonist" text="The man who destroyed the world" imageSrc={card4} type={LoreTypes.ENEMY} charKey={CharacterEnum.MAIN_ANT} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="Wolves" text="The local wildlife." imageSrc={card5} type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_1} />
                    </div>
                    <LoreCard title="Void Cultists" text="Followers of the void." imageSrc={card6} type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_2} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="Void Bats" text="Flying horrors from the sky." imageSrc={card7} type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_3} />
                    </div>
                    <LoreCard title="Void Tunnels" text="Cross the ruined world." imageSrc={card8} type={LoreTypes.WORLD} charKey={CharacterEnum.MECH_1} />
                </Col>
            </Row>
        </Container>
    );
}

export default LorePage;