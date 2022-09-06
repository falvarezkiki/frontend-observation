import { useRouter } from "next/router"
import Layout from "../../components/layout"
import Title from "../../components/title"
import Head from 'next/head';


export default function interventions({interventions}){
    const router = useRouter();
    
    return(
        <Layout>
            <Head>
            <title>Interventions</title>
            </Head>
            <Title>Interventions Details</Title>
            <div  className='card'>
                    <h3> Interventions</h3>

                    <p>ID: {interventions._id}</p>
                    
                    <p>Name: {interventions.name}</p>

                    <p>Description: {interventions.description}</p>

                    <p>ID ID Client: {interventions.idClient}</p>

                    
            </div>
            <style jsx>
                {`
                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: black;
                text-decoration: none;
                border: 2px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
                }
                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }
                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }
                `}
            </style>
            

            

            


        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/v1/interventions');
    const interventions = await res.json();
    const paths = interventions.map(interventions => {
    return {
        params: { id: `${interventions._id}` }
    }
    });
    
    return {
    paths,
    fallback: true
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/v1/interventions/${params.id}`);
    const interventions = await res.json();
    return {
        props: {
            interventions
        }
    }
}