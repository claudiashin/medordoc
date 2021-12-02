import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { db } from "../../firebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import HeroAvatar from "../HeroAvatar";

import { reload } from "@firebase/auth";

const MainCont = styled.div`
  position: relative;
  width: 500px;
  border: 1px solid #505050;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  background: white;
`;
const AvatarCont = styled.div`
  width: 130px;
  height: 130px;
  margin-top: 45px;
  margin-bottom: 10px;
`;
const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const Form = styled.fieldset`
  margin: 15px;
  border: 1px solid black;
`;
const FormTitle = styled.legend`
  margin: 0;
  font-size: 12px;
`;
const FormInput = styled.input`
  border: none;
  outline: none;
  type: text;
  width: 280px;
  height: 13px;
`;
const SelectCont = styled.select`
  width: 100%;
  height: 15px;
  border: none;
`;
const SelectOpt = styled.option`
  width: 100%;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: right;
  width: 80%;
  padding-top: 35px;
  padding-bottom: 45px;
`;
const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #faf0bf;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const CloseModalbutton = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const AlertBanner = styled.div`
  width: 80%;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "English",
  "French",
  "Cantonese",
  "Mandarin",
  "Japanese",
  "Korean",
  "Punjabi",
  "Hindi",
  "Farsi"
];

function getStyles(name, languages, theme) {
  return {
    fontWeight:
      languages.indexOf(name) > -1
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
        fontFamily:"nunito"
  };
}

const DoctorInputCard = ({
  profile = "https://placekitten.com/1200/1200",
  uid,
  showModal,
  reload,
  info,
}) => {
  const [nameDoc, setNameDoc] = useState("");
  const [ex, setEx] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [languages, setLanguages] = React.useState([]);
  const [imgUrl, setImageUrl] = useState("");

  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState("");

  const theme = useTheme();

  useEffect(() => {
    setNameDoc(info.name ?? "");
    setEx(info.experience ?? "");
    setGender(info.gender ?? "");
    setLocation(info.location ?? "");
    setLanguages(info.language ?? []);
    setImageUrl(info.imgUrl ?? "");
  }, [info]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguages(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const clean = () => {
    setNameDoc("");
    setLocation("");
    setGender("");
    setEx("");
    setLanguages([]);
    setImageUrl("");
  };

  return (
    <MainCont>
      <CloseModalbutton>
        <IoIosClose
          onClick={() => {
            clean();
            showModal(false);
          }}
          size={60}
        />
      </CloseModalbutton>

      {/* <AvatarCont>
        <AvatarImg src={profile} />
      </AvatarCont> */}
      {/* <HeroAvatar 
        herowidth="150px"
        heroheight="150px"
        heromargin="15px"
        pluswidth="20px"
        profile={imgUrl}
      /> */}
      <AlertBanner show={showAlert}>{error}</AlertBanner>
      <FormCont>
        <Form>
          <FormTitle>Name</FormTitle>
          <FormInput
            type="text"
            placeholder="Enter Dr Name"
            value={nameDoc}
            onChange={(e) => setNameDoc(e.target.value)}
          />
        </Form>
        <Form>
          <FormTitle>Years Experience</FormTitle>
          <FormInput
            type="number"
            placeholder="Enter Years of Experience"
            value={ex}
            onChange={(e) => setEx(e.target.value)}
          />
        </Form>
        <Form>
          <FormTitle>Gender</FormTitle>
          <SelectCont
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Choose Gender"
          >
            <SelectOpt></SelectOpt>
            <SelectOpt style={{fontFamily:"nunito"}}>Male</SelectOpt>
            <SelectOpt style={{fontFamily:"nunito"}}>Female</SelectOpt>
          </SelectCont>
        </Form>
        <Form>
          <FormTitle>Location</FormTitle>
          <FormInput
            type="text"
            placeholder="Enter Clinic Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form>
        <div>
          <FormControl sx={{ m: 1, width: 400, height: 35, marginTop: 2, fontFamily:"nunito", borderRadius: 0, }}>
            <InputLabel style={{fontFamily:"nunito", color: 'black'}} id="demo-multiple-name-label">Languages</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={languages}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              style={{
                height: 40,
                width: 390,
                marginLeft: 5,
                borderBlockColor: "black",
                fontFamily:"nunito"
              }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, languages, theme)}
                  
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </FormCont>
      <ButtonCont>
        <Button
          onClick={async () => {
            setShowAlert(false);
            if (
              nameDoc == "" ||
              location == "" ||
              gender == "" ||
              ex == "" ||
              languages.length == 0
            ) {
              setError("Please fill out the form correctly");
              setShowAlert(true);
            } else {
              if (info.id) {
                const doctorsDocRef = doc(db, "doctors", info.id);
                await updateDoc(doctorsDocRef, {
                  name: nameDoc,
                  ex: ex,
                  gender: gender,
                  location: location,
                  lang: languages,
                });
              } else {
                const result = await addDoc(collection(db, "doctors"), {
                  name: nameDoc,
                  ex: ex,
                  gender: gender,
                  location: location,
                  lang: languages,
                  clinicId: uid,
                  // objectURL: objectURL
                });
              }
              reload(uid);
              clean();
              showModal(false);
            }
          }}
        >
          Confirm
        </Button>
      </ButtonCont>
    </MainCont>
  );
};

//card
const Maincont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 420px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
  padding-bottom: 50px;
`;
//avatar image
const Avatarcont = styled.div`
  display: flex;
  height: 105px;
  width: 105px;
  right: 50px;
  margin: 5px;
  border-radius: 50px;
  background-color: #c4c4c4;
`;

const Avatarimg = styled.img`
  width: 100%;
  height: 100%;
  /* resize-mode:cover; */
  border-radius: 50px;
`;

//Patient info text
const Textcont = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 10px 30px 15px 30px;
  // margin-right: 85px;
`;
const Text = styled.text`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
`;
const Nameheader = styled.text`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
`;

//close button
const Closebutton = styled.div`
  display: flex;
  border-radius: 50%;
  margin-top: 60px;
  margin-left: 270px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #eadca2;
    opacity: 0.8;
    transition: 1s;
  }
`;
//edit button for doctor side
const Editbut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 100px;
  height: 35px;
  background-color: #faf0bf;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #eadca2;
    transition: 1s;
  }
`;

const EditbutCont = styled.div`
  display: ${(props) => props.button2};
  margin-bottom: 18px;
`;

const DoctorCard = ({ info, showModal, deleteDoctor }) => {

//  const ChangeImage = () => {

//  }


  var img = '/maledoctor.png';

  if (info.gender == "Female") {
    img = '/femaledoctor.png';
  }
  else if (info.gender == "Male") {
    img = '/maledoctor.png';
  }
  console.log(info.gender);


  return (
    <Maincont>
      <Closebutton>
        <IoIosClose
          onClick={() => {
            deleteDoctor(info.id);
          }}
          size={40}
          style={{position: 'absolute', top: 0, right: -18}}
        />
      </Closebutton>
      <div
        style={{width: 80, height: 80, margin: 10}}
      >
      <img
        style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
        id="heroimg"
        src={img}
      />
      </div>
      <Nameheader>
        <Text style={{ fontSize: 20 }}>{info.name}</Text>
      </Nameheader>
      <Textcont>
        <Text>{"Gender: " + info.gender}</Text>
        <Text>{"Language: " + info.language.join(", ")}</Text>
        <Text>{"Experience: " + info.experience}</Text>
        <Text>{"Location: " + info.location}</Text>
      </Textcont>
      <EditbutCont>
        <Editbut
          onClick={() => {
            showModal(true);
          }}
        >
          Edit
        </Editbut>
      </EditbutCont>
    </Maincont>
  );
};

export { DoctorCard, DoctorInputCard };
