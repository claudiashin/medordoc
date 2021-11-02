import styled from 'styled-components';

const InfoCardCont = styled.div`
    border: 1px solid #E9D7CB;
    display: flex;
    flex-direction: column;
    width: ${props => props.cont_width}px;
    padding: 20px;
    margin: 10px;
`;

const HeadingCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    color: #505050;
    margin: 20px;
    text-align: center;
`;

const SubheadingCont = styled.div`
`;

const Subheading = styled.p`
    font-size: 22px;
    color: #505050;
    margin: 30px;
`;


const InfoCard = ({
    heading = "Welcome to MedOrDoc!",
    subheading = "An email confirmation has been sent to you.",
    subheading_two = "Please check your inbox and validate your account.",
    width = 600,
}) => {

    return <InfoCardCont cont_width={width}>
        <HeadingCont>
            <Heading>{heading}</Heading>
        </HeadingCont>

        <SubheadingCont>
            <Subheading>{subheading}</Subheading>
            <Subheading>{subheading_two}</Subheading>
        </SubheadingCont>
    </InfoCardCont>
}


export default InfoCard;
