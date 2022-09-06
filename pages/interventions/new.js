import Form from "../../components/formIntervention";


export default function NewIntervention() {

    const InterventionForm ={
        name:"",
        description:"",
        idClient:"",
        idComsultnt:"",
        idStudyCase:"",
    };

    return <Form InterventionForm={InterventionForm}/>
}