import styled from 'styled-components';

const InfoCardCont = styled.div`
    border: 1px solid #E9D7CB;
    display: flex;
    flex-direction: column;
    width: ${props => props.cont_width}px;
    padding: 20px;
    margin: 10px;
    background-color: #fff;
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
    font-size: 20px;
    color: #505050;
    margin: 30px;
`;


const InfoCard = ({
    heading = "Welcome to MedOrDoc!",
    subheading = "Please sign in with your email and password.",
    subheading_two = "For faster checking in patients, use the tab on the right hand side of every page.",
    width = 500,
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
