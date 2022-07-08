import { useRouter } from "next/router"
import Layout from "../../components/layout"
import Title from "../../components/title"
import Head from 'next/head';


export default function studyCase1({studyCase}){
    const router = useRouter();
    
    return(
        <Layout>
            <Head>
            <title>Study Case</title>
            </Head>
            <Title>Study Cases Details</Title>
            <div  className='card'>
                    <h3> Study Case</h3>

                    <p>ID: {studyCase._id}</p>
                    
                    <p>Nombre: {studyCase.name}</p>
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
    const res = await fetch('http://localhost:3000/api/v1/studyCases');
    const studyCases = await res.json();
    const paths = studyCases.map(studyCase => {
    return {
        params: { id: `${studyCase._id}` }
    }
    });
    
    return {
    paths,
    fallback: true
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/v1/studyCases/${params.id}`);
    const studyCase = await res.json();
    return {
        props: {
            studyCase
        }
    }
}