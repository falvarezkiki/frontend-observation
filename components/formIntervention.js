import React from "react";
import Layout from "./layout";
import {AiOutlinePlus} from 'react-icons/ai';
import {withRouter} from 'next/router'
import Link from "next/dist/client/link";
import { tryGetPreviewData } from "next/dist/server/api-utils";

class InterventionForm extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            name: "",
            description: "",
            idClient:"",
            idConsultant:"",
            idStudyCase:"",
        };
        this.changeName= this.changeName.bind(this);
        this.changeDescription= this.changeDescription.bind(this);
        this.changeIdClient= this.changeIdClient.bind(this);
        this.changeIdConsultant= this.changeIdConsultant.bind(this);
        this.changeIdStudyCase= this.changeIdStudyCase.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    changeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    changeIdClient(event) {
        this.setState({
            idClient: event.target.value,
        });
    }

    changeIdConsultant(event) {
        this.setState({
            idConsultant: event.target.value,
        });
    }

    changeIdStudyCase(event) {
        this.setState({
            idStudyCase: event.target.value,
        });
    }

   async handleSubmit(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/api/v1/interventions', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({...this.state})
        });
        console.log(this.state)
        const interventions = await response.json();
        return {
            props: {
                interventions,
            },
        }
     
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <Layout>
            <h1>
            Add Interventions
            </h1>
            <div>
            <input name="name" type="text" placeholder="name study case" className="w-full mb-5" value={this.state.name} onChange={this.changeName}></input>
            <br></br>
            <input name="description" type="text" placeholder="description" className="w-full mb-5" value={this.state.description} onChange={this.changeDescription}></input>
            <input name="idClient" type="text" placeholder="Id Client" className="w-full mb-5" value={this.state.idClient} onChange={this.changeIdClient}></input>
            <input name="idConsultant" type="text" placeholder="Id Consultant" className="w-full mb-5" value={this.state.idConsultant} onChange={this.changeIdConsultant}></input>
            <input name="idStudyCase" type="text" placeholder="Id Study Case" className="w-full mb-5" value={this.state.idStudyCase} onChange={this.changeIdStudyCase}></input>
            </div>
            <div className='flex-grow'> 
            <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center mx-2'type="submit">
            <AiOutlinePlus/>
            SAVE
            </button>
            <Link href={'/interventions'}>
            <a>
            <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center mx-2'>
            <AiOutlinePlus/>
            BACK
            </button>
            </a>
            </Link>
            </div>
            </Layout>
            </form>
            );
        } 
    }
    export default withRouter(InterventionForm);
    
