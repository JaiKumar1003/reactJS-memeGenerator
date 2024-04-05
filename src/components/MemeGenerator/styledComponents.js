// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-top: 30px;
padding-bottom: 30px;
`

export const MainHeading = styled.h1`
color: #35469c;
font-family: "Open Sans";
font-size: 24px;
font-weight: bold;

@media screen and (min-width: 768px) {
    font-size: 34px;
    width: 80%;
    margin-bottom: 10px;
}
`

export const MemeGeneratorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;

@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 100vh;
    width: 80%;
}
`

export const MemeGeneratorBg = styled.div`
background-image: url(${props => props.imageUrl});
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50vh;
width: 100%;

@media screen and (min-width: 768px) {
    height: 70vh;
    width: 46%;
    order: 1;
}
`

export const MemeGeneratorText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
`

export const FormInputContainer = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
margin-top: 30px;
margin-bottom: 30px;

@media screen and (min-width: 768px) {
    width: 46%;
    margin-top: 0px;
    margin-bottom: 0px;
}
`
export const FormLabel = styled.label`
color: #7e858e;
font-size: 14px;
margin-bottom: 10px;
`
export const FormInput = styled.input`
background-color: transparent;
border: 1px solid #d7dfe9;
border-radius: 6px;
color: #1e293b;
font-size: 14px;
padding-left: 12px;
height: 40px;
width: 100%;
margin-bottom: 20px;
`
export const SelectContainer = styled.select`
height: 40px;
width: 100%;
padding-left: 12px;
`

export const OptionInput = styled.option`
color: #1e293b;
font-size: 14px;
`

export const FormGenerateButton = styled.button`
background-color: #0b69ff;
border: none;
border-radius: 8px;
color: #ffffff;
font-size: 14px;
height: 40px;
width: 120px;
margin-top: 26px;
cursor: pointer;
outline: none;
`
