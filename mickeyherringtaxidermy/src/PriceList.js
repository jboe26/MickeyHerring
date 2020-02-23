import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Card, CardDeck } from 'react-bootstrap';


class PriceList extends Component {
    render() {
        return (
            <CardDeck style={{ width: '85rem' }}>
                <Card>
                    <Card.Body>
                        <Card.Title controlId="birds">Birds</Card.Title>
                        <Card.Text>
                            Duck: <br />$225-$250<br /><br />
                            Goose: <br />$425<br /><br />
                            Grouse:<br /> $225<br /><br />
                            Pheasant: <br />$225<br /><br />
                            Turkey (any pose): <br />$650<br /><br />
                            Head, Neck, and Tail:<br /> $350<br /><br />
                            Quail (by size): <br />$200<br /><br />
                            <br />
                            <p>
                                *Prices include a suitable base. <br />
                                *Natural Habitat bases are custom made at additional cost.</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title controlId="hornPlaques">Horn Plaques</Card.Title>
                        <Card.Text>

                            Antelope/Deer/Goat:<br /> $85<br /><br />
                            Elk/Caribou: <br />$150<br /><br />
                            Moose/Sheep:<br /> $250<br /><br />
                            Deer gun rack:<br /> $150<br /><br />
                            <br />
                            **Fashioned with buckskin covering on a wood panel.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title controlId="fish">Fish</Card.Title>
                        <Card.Text>
                            Bass:<br /> $200-$300<br /><br />
                            Pan Fish:<br /> $175<br /><br />
                            Striper/Trout (per inch): <br />$15<br /><br />
                            Salt Water (per inch):<br /> $15<br /><br />
                            Reproductions (per inch):<br /> $15<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title controlId="skullMounts">European Skull Mounts</Card.Title>
                        <Card.Text>
                        Bear:<br /> $150<br /><br />
                        Boar:<br /> $150<br /><br />
                        Cats:<br /> $100<br /><br />
                        Deer:<br /> $150<br /><br />
                        Elk/Caribou:<br /> $200<br /><br />
                        Moose:<br /> $300<br /><br />
                        Sheep/Goat:<br /> $200<br /><br />
                        Small Game:<br /> $75<br /><br />
                        *Animal's natural skull is cleaned, bleached and treated.<br />
                        </Card.Text>
                    </Card.Body>

                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title controlId="gameMounts">Game Mounts</Card.Title>
                        <Card.Text>
                                            Shoulder   /    Life-Size<br /><br />
                       Antelope:             <br /> $450       /    $2000  <br />    <br />
                       Badger:               <br />       -    /    $500<br /><br />
                             Black Bear:          <br />       -   /   $500/foot   <br /> <br />
                             Grizzly Bear:        <br />       -   /    $600/foot <br /><br />
                       Beaver:               <br />       -    /    $800<br /><br />
                       Boar:               <br /> $450        /    $2500    <br /><br />
                       Bobcat/Lynx:        <br /> $350        /    $650<br /><br />
                       Caribou:            <br /> $750        /    $2500<br /><br />
                       Coyote:             <br /> $400        /    $750<br /><br />
                            Whitetail Buck:<br />   $495      /     $2500<br /><br />
                            Mule Deer: <br />             $495      /    $1500<br /><br />
                       Elk:               <br />            -  /    $1250<br /><br />
                       Elk Bugling:       <br />            -  /    $1350<br /><br />
                       Fox:               <br />            -  /    $650<br /><br />
                       Peccary/Javelina:    <br />  $350      /     $600<br /><br />
                       Otter:               <br />          -  /     $650<br /><br />
                       Raccoon:             <br />          -  /    $650<br /><br />
                       Size of squirrel/weasel: <br />      -  /    $200<br /><br />
 
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardDeck>


        )
    }
}

export default PriceList;