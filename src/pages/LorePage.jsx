import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import LoreTypes from "../enums/VariantEnum";
import LoreCard from "../components/cards/LoreCard";
import Style from "../SiteThemes";
import CharacterEnum from "../enums/CharacterEnum";

function LorePage() {
    return (
        <Container fluid style={Style.Background}>
            <Row id="cards">
                <Col>
                    <div className="mb-4">
                        <LoreCard title="The Kingdom" text="The world we're trying to save." imageSrc="\assets\img\card1.png" type={LoreTypes.WORLD} charKey={CharacterEnum.WORLD_1} />
                    </div>
                    <LoreCard title="The Void" text="Once there was only the void." imageSrc="\assets\img\card2.png" type={LoreTypes.WORLD} charKey={CharacterEnum.WORLD_2} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="The Protagonist" text="You" imageSrc="\assets\img\card3.png" type={LoreTypes.ALLY} charKey={CharacterEnum.MAIN_CHAR} />
                    </div>
                    <LoreCard title="The Antagonist" text="The man who destroyed the world" imageSrc="\assets\img\card4.png" type={LoreTypes.ENEMY} charKey={CharacterEnum.MAIN_ANT} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="Wolves" text="The local wildlife." imageSrc="\assets\img\card5.png" type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_1} />
                    </div>
                    <LoreCard title="Void Cultists" text="Followers of the void." imageSrc="\assets\img\card6.png" type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_2} />
                </Col>
                <Col>
                    <div className="mb-4">
                        <LoreCard title="Void Bats" text="Flying horrors from the sky." imageSrc="\assets\img\card7.png" type={LoreTypes.ENEMY} charKey={CharacterEnum.ENEMY_3} />
                    </div>
                    <LoreCard title="Void Tunnels" text="Cross the ruined world." imageSrc="\assets\img\card8.png" type={LoreTypes.WORLD} charKey={CharacterEnum.MECH_1} />
                </Col>
            </Row>
        </Container>
    );
}

export default LorePage;