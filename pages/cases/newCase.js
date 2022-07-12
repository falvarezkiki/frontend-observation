import Form from "../../components/formCase";

export default function NewCase() {
    const CaseForm = {
        name: "",
        description: "",
        idStudyCase:"",
        questions: "",
        propTheoreticals: "",
        analisysUnit: "",
    };
    return <Form CaseForm={CaseForm} />;
}