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
                            Duck: $225-$250<br /><br />
                            Goose: $425<br /><br />
                            Grouse: $225<br /><br />
                            Pheasant: $225<br /><br />
                            Turkey (any pose): $650<br /><br />
                            Head, Neck, and Tail: $350<br /><br />
                            Quail (by size): $200<br /><br />
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

                            Antelope/Deer/Goat: $85<br /><br />
                            Elk/Caribou: $150<br /><br />
                            Moose/Sheep: $250<br /><br />
                            Deer gun rack: $150<br /><br />
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
                            Bass: $200-$300<br /><br />
                            Pan Fish: $175<br /><br />
                            Striper/Trout (per inch): $15<br /><br />
                            Salt Water (per inch): $15<br /><br />
                            Reproductions (per inch): $15<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title controlId="skullMounts">European Skull Mounts</Card.Title>
                        <Card.Text>
                        Bear: $150<br /><br />
                        Boar: $150<br /><br />
                        Cats: $100<br /><br />
                        Deer: $150<br /><br />
                        Elk/Caribou: $200<br /><br />
                        Moose: $300<br /><br />
                        Sheep/Goat: $200<br /><br />
                        Small Game: $75<br /><br />
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
                       Antelope             $450       /    $2000  <br />    <br />
                       Badger                          /    $500<br /><br />
                       Bear: <br />
                             Black                     /   $500/foot   <br /> <br />
                             Grizzly                   /    $600/foot <br /><br />
                       Beaver                          /    $800<br /><br />
                       Boar                $450        /    $2500    <br /><br />
                       Bobcat/Lynx         $350        /    $650<br /><br />
                       Caribou             $750        /    $2500<br /><br />
                       Coyote              $400        /    $750<br /><br />
                            Whitetail Buck:<br />   $495      /     $2500<br /><br />
                            Mule Deer: <br />             $495      /    $1500<br /><br />
                       Elk                             /    $1250<br /><br />
                       Elk Bugling                     /    $1350<br /><br />
                       Fox                             /    $650<br /><br />
                       Peccary/Javelina      $350      /     $600<br /><br />
                       Otter                           /     $650<br /><br />
                       Raccoon                         /    $650<br /><br />
                       Size of squirrel/weasel         /    $200<br /><br />
 
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardDeck>


        )
    }
}

export default PriceList;