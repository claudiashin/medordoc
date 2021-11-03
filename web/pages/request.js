import styled from "styled-components";

import PatientCard from '../comps/PatientCard';

const Cont = styled.div`

`
const ContPatientCard = styled.div`
    display:flex;
    flex-wrap: wrap;
    height
`

export default function Home() {
    return( <Cont>
        <ContPatientCard>
            <PatientCard/>
        </ContPatientCard>
    </Cont>

    )
}