import React from "react";
import Layout from "./layout";
import {AiOutlinePlus} from 'react-icons/ai';
import {withRouter} from 'next/router'
import Link from "next/dist/client/link";
import { tryGetPreviewData } from "next/dist/server/api-utils";

class CaseForm extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            name: "",
            description: "",
            idStudyCase:"",
            questions:"",
            propTheoreticals:"",
            analisysUnit:"",
        };
        this.changeName= this.changeName.bind(this);
        this.changeDescription= this.changeDescription.bind(this);
        this.changeIdStudyCase= this.changeIdStudyCase.bind(this);
        this.changeQuestions= this.changeQuestions.bind(this);
        this.changePropTheoreticals= this.changePropTheoreticals.bind(this);
        this.changeAnalisysUnit= this.changeAnalisysUnit.bind(this);

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

    changeIdStudyCase(event) {
        this.setState({
            idStudyCase: event.target.value,
        });
    }

    changeQuestions(event) {
        this.setState({
            questions: event.target.value,
        });
    }

    changePropTheoreticals(event) {
        this.setState({
            propTheoreticals: event.target.value,
        });
    }

    changeAnalisysUnit(event) {
        this.setState({
            analisysUnit: event.target.value,
        });
    }

   async handleSubmit(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/api/v1/cases', {
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
        const cases = await response.json();
        return {
            props: {
                cases,
            },
        }
     
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <Layout>
            <h1>
            Add Study Case
            </h1>
            <div>
            <input name="name" type="text" placeholder="name study case" className="w-full mb-5" value={this.state.name} onChange={this.changeName}></input>
            <br></br>
            <input name="description" type="text" placeholder="description" className="w-full mb-5" value={this.state.description} onChange={this.changeDescription}></input>
            <input name="idStudyCase" type="text" placeholder="Id Study Case" className="w-full mb-5" value={this.state.idStudyCase} onChange={this.changeIdStudyCase}></input>
            <input name="questions" type="text" placeholder="questions" className="w-full mb-5" value={this.state.questions} onChange={this.changeQuestions}></input>
            <input name="propTheoreticals" type="text" placeholder="Prop. Theoreticals" className="w-full mb-5" value={this.state.propTheoreticals} onChange={this.changePropTheoreticals}></input>
            <input name="analisysUnit" type="text" placeholder="Analisys Unit" className="w-full mb-5" value={this.state.analisysUnit} onChange={this.changeAnalisysUnit}></input>
            </div>
            <div className='flex-grow'> 
            <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center mx-2'type="submit">
            <AiOutlinePlus/>
            SAVE
            </button>
            <Link href={'/studyCase'}>
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
    export default withRouter(CaseForm);
    
