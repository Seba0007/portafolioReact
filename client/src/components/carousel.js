import React from 'react';
import countries from "../assets/images/countries.PNG"
import cocacola from "../assets/images/cocacola.jpg"
import energy from "../assets/images/energy.png"
import sprite from "../assets/images/sprite.jpg"
import { Container, Row} from 'react-bootstrap';

import Card from "./Card"

class Carousel extends React.Component{

    
        state={
            projects: [
                {
                    id: 0,
                    name: "countries",
                    description: "Find info about countries",
                    image: countries,
                    link: "https://mguaraz120.github.io/Countries-Info-API/",
                    selected: false,
                },
                {
                    id: 1,
                    name: "cocacola",
                    description: "cocacola",
                    image: cocacola,
                    link: "https://google.com",
                    selected: false,
                },
                {
                    id: 2,
                    name: "energy",
                    description: "Find energy",
                    image: energy,
                    link: "https://google.com",
                    selected: false,
                },
                {
                    id: 3,
                    name: "sprite",
                    description: "Find info about sprite",
                    image: sprite,
                    link: "https://google.com",
                    selected: false,
                }
            ]
        }
    

    handleClick = (id) => {
        let projects = [...this.state.projects]

        projects[id].selected = projects[id].selected ? false : true;

        projects.forEach(project => {
            if(project.id !== id){
                project.selected = false;
            }
        });
        this.setState({
            projects
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row>
                    {this.state.projects.map(project =>
                        <Card 
                            project={project}
                            click={e => this.handleClick(project.id, e)}
                            key={project.id}
                        />
                    )}
                </Row>
            </Container>
            )
    }
}

export default Carousel;