
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
import {AiOutlinePlus} from 'react-icons/ai';
import { useRouter } from "next/dist/client/router";
import {VscTrash} from 'react-icons/vsc'
import router from "next/router";



function Observation  ({observation}) {
    const router1 = useRouter();
    
    
    
    return(
        <Layout>
        <Title>Observation List</Title>
        <div key={observation.id}>
        {observation.map(observation => {
            return(
                <div className='card' style={{ display:"flex", flexDirection:"column", marginTop:"8px"}}>
                <Link href={'/observation/[id]'} as={`/observation/${observation.id}`} onClick={()=> router1.push('observation/form'+ observation.id)}>
                <a >
                <h3>{observation.name}</h3>
                <p>{observation.id}</p>
                </a>
                </Link>
                
                <button style={{display:"flex",justifyContent:"flex-end", width:"max-content"}} className='bg-red-500 px-1 py-3 hover:bg-red-300 items-center ' onClick={()=> deleteObservation(observation.id)}>
                <VscTrash className= 'mr-1'/>
                Delete
                </button>
                </div>
                )
            })}
            </div>
            <div>
            
            </div>
            <div className='flex-grow'>
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('observation/form')}>
            <AiOutlinePlus className= 'mr-1'/>
            Add Observation
            </button>
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('observation/')}>
            <AiOutlinePlus className= 'mr-1'/>
            Refrech
            </button>
            </div>
            <style jsx>
            {`
            .card {
                margin: 1rem;
                flex-basic: 45%;
                padding: 1.5rem;
                color: black;
                text-decoration: none;
                border: 2px solid #eaeaea;
                border-radius: 10px;
            }
            .card:hover,
            .card:focus,
            .card:active{
                border-color: #0070f3;
            }
            .card h3{
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }
            .card p{
                margin:0;
                font-size: 1.25rem;
                line-heigth: 1.5;
            }
            
            `}
            </style>
            </Layout>
            
            
            )
        }
        export default Observation;
        
        export async function getStaticProps() {
            const res = await fetch('http://localhost:3000/observation') // url del backend
            const observation = await res.json()
            return {
                props: {
                    observation,
                },
            }
        }
        
        export async function deleteObservation (idObservation, router){
            const response = await fetch(`http://localhost:3000/observation/${idObservation}`,{
            method: 'DELETE',
            cors: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const data = response.json()
    }