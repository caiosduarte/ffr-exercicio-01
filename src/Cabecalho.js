import React, { Component } from "react";

// componente como classe
export class Cabecalho extends Component {
    render() {
        return (
            <header>
                <h1><img src=""/>Logo</h1>
                <nav>
                    <ul>
                        <li>Topic 1</li>
                        <li>Topic 2</li>
                        <li>Topic 3</li>
                        <li>Topic 3</li>
                    </ul>
                </nav>
                <input type="text" placeholder="Search"></input>
            </header>
        );
    }

}