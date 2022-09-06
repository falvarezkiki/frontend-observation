
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
import {AiOutlinePlus} from 'react-icons/ai';
import { useRouter } from "next/dist/client/router";
import {VscTrash} from 'react-icons/vsc'
import router from "next/router";



function Interventions  ({interventions}) {
    const router1 = useRouter();
    
    
    
    return(
        <Layout>
        <Title>Interventions List</Title>
        <div key={interventions._id}>
        {interventions.map(interventions => {
            return(
                <div className='card' style={{ display:"flex", flexDirection:"column", marginTop:"10px"}}>
                <Link href={`interventions/[id]`} as={`interventions/${interventions._id}`} onClick={()=> router1.push('interventions/new'+ interventions._id)}>
                <a >
                <h3>Name: {interventions.name}</h3>
                <p>Description: {interventions.description}</p>
                <p>ID CLient: {interventions.idClient}</p>
                <p>ID Consultant: {interventions.idConsultant}</p>
                <p>ID Study Case: {interventions.idStudyCase}</p>
                </a>
                </Link>
                
                <button style={{display:"flex",justifyContent:"flex-end", width:"max-content"}} className='bg-red-500 px-1 py-3 hover:bg-red-300 items-center ' onClick={()=> deleteInterventions(interventions._id)}>
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
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('interventions/new')}>
            <AiOutlinePlus className= 'mr-1'/>
            Add Intervention
            </button>
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('interventions/')}>
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
        export default Interventions;
        
        export async function getStaticProps() {
            const res = await fetch('http://localhost:3000/api/v1/interventions') // url del backend
            const interventions = await res.json()
            return {
                props: {
                    interventions,
                },
            }
        }
        
        export async function deleteInterventions (id){
            const response = await fetch(`http://localhost:3000/api/v1/interventions/${id}`,{
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
    }

    