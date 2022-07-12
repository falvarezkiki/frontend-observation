
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
import {AiOutlinePlus} from 'react-icons/ai';
import { useRouter } from "next/dist/client/router";
import {VscTrash} from 'react-icons/vsc'
import router from "next/router";



function Cases  ({cases}) {
    const router1 = useRouter();
    
    
    
    return(
        <Layout>
        <Title>Cases List</Title>
        <div key={cases._id}>
        {cases.map(cases => {
            return(
                <div className='card' style={{ display:"flex", flexDirection:"column", marginTop:"10px"}}>
                <Link href={`cases/[id]`} as={`cases/${cases._id}`} onClick={()=> router1.push('cases/form'+ cases._id)}>
                <a >
                <h3>Name: {cases.name}</h3>
                <p>Description: {cases.description}</p>
                <p>idStudyCase: {cases.idStudyCase}</p>
                <p>Questions: {cases.questions}</p>
                <p>Prop. Theoreticals: {cases.propTheoreticals}</p>
                <p>Analisys Unit: {cases.analisysUnit}</p>
                <p>Id: {cases._id}</p>
                </a>
                </Link>
                
                <button style={{display:"flex",justifyContent:"flex-end", width:"max-content"}} className='bg-red-500 px-1 py-3 hover:bg-red-300 items-center ' onClick={()=> deleteCases(cases._id)}>
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
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('cases/newCase')}>
            <AiOutlinePlus className= 'mr-1'/>
            Add Case
            </button>
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center mx-2'onClick={()=>router.push('cases/')}>
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
        export default Cases;
        
        export async function getStaticProps() {
            const res = await fetch('http://localhost:3000/api/v1/cases') // url del backend
            const cases = await res.json()
            return {
                props: {
                    cases,
                },
            }
        }
        
        export async function deleteCases (id){
            const response = await fetch(`http://localhost:3000/api/v1/cases/${id}`,{
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

    