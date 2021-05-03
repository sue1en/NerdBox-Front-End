import { Col, Label, Row, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const FormBox = ({ state }) => {
    const [form, setForm] = state

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="12" lg="12">
                <FormGroup>
                    <Label for="name">Nome da Caixa</Label>
                    <Input type="text" id="name" value={form.name || ""} onChange={handleChange}
                        name="name" placeholder="Insira o nome da caixa" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Descrição</Label>
                    <Input type="text" id="description" value={form.description || ""} onChange={handleChange}
                        name="description" placeholder="Insira do coordinator" />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Preço</Label>
                    <Input type="number" id="price" value={form.price || ""} onChange={handleChange}
                        name="price" />
                </FormGroup>
            </Col>
        </BoxInscricao>
    )
}
export default FormBox;

const BoxInscricao = styled(Row)``