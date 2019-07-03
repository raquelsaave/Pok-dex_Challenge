import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { getData } from '../../../utils/api';
import './Welcome.css'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pokemon: {}
        }

        this.updatePokemonName = this.updatePokemonName.bind(this);
        this.query = this.query.bind(this);
    }

    updatePokemonName({ target }) {
        this.setState({ name: target.value });
    }

    query() {
        var obj = `${Object.keys({ ...this.state.name })
            .map(key => `${encodeURIComponent({ ...this.state.name }[key])}`)
            .join('')}`;
        getData(obj).then((data) => this.setState({ pokemon: data }));

    }

    render() {
        return (
            <>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>¡Inserta el nombre de tu pokemon!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formPokemonName">
                            <Form.Label> Nombre </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" ... Nombre"
                                value={this.state.name}
                                onChange={this.updatePokemonName}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="button" onClick={this.query}>Go!</Button>
                    </Modal.Footer>
                </Modal.Dialog>

                <div className="container">
                    <div className="col-xs-12">
                        <div className="head">
                            <h1> Tu pokemón </h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.pokemon.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">

                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Altura</th>
                                                <th scope="col">Peso</th>
                                                <th scope="col">Experiencia</th>
                                                <th scope="col">Orden</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{this.state.pokemon.id}</th>
                                                <td>{this.state.pokemon.height}</td>
                                                <td>{this.state.pokemon.weight}</td>
                                                <td>{this.state.pokemon.base_experience} </td>
                                                <td>{this.state.pokemon.order}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div className="cont">
                                        <div className="lado1">
                                            <ul>
                                                <li>ID: {this.state.pokemon.id}</li>
                                                <li>Altura: {this.state.pokemon.height}</li>
                                                <li>Peso : {this.state.pokemon.weight}</li>
                                                <li>Experiencia : {this.state.pokemon.base_experience}  </li>

                                                <li>Orden : {this.state.pokemon.order}</li>
                                            </ul>
                                        </div>
                                        <div className="lado2">

                                        </div>
                                    </div> */}
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        );
    }
}

export default Welcome;