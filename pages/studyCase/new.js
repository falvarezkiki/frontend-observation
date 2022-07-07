import Form from "../../components/form";

export default function New() {
    const StudyCaseForm = {
        name: "",
        idTemporalT:"",
    };
    return <Form StudyCaseForm={StudyCaseForm} />;
}