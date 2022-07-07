import React from "react";
import Layout from "./layout";
import {AiOutlinePlus} from 'react-icons/ai';
import {withRouter} from 'next/router'
import Link from "next/dist/client/link";
import { tryGetPreviewData } from "next/dist/server/api-utils";

class StudyCaseForm extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            name: "",
            idTemporalT: "",
        };
        this.changeName= this.changeName.bind(this);
        this.changeIdTemporalT= this.changeIdTemporalT.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    changeIdTemporalT(event) {
        this.setState({
            idTemporalT: event.target.value,
        });
    }

   async handleSubmit(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/api/v1/studyCases', {
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
        const studyCase = await response.json();
        return {
            props: {
                studyCase,
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
            <input name="idTemporalT" type="text" placeholder="Id temporal t" className="w-full mb-5" value={this.state.idTemporalT} onChange={this.changeIdTemporalT}></input>
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
    export default withRouter(StudyCaseForm);
    
