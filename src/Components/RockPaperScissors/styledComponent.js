import styled from 'styled-components'

export const RockPaperScissorsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RockPaperScissorsBox = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: calc(100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
`
export const ContentBox = styled.div`
  max-width: 800px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15vh;
`
export const HeaderBox = styled.header`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-family: Bree Serif;
`
export const HeaderNamesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`
export const Heading = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
  align-self: flex-start;
  font-weight: 500;
  text-align: left;
`
export const ScoreBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  max-width: 120px;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  font-family: Bree Serif;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreName = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`
export const ScoreValue = styled.p`
  font-size: 42px;
  font-family: Roboto;
  font-weight: 700;
  margin: 5px 0;
`
// Choose
export const ChooseUlBox = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  width: 300px;
  box-sizing: border-box;
`
export const ChooseLiItem = styled.li`
  border-radius: 50%;
  display: flex;
  width: 140px;
`
export const ChooseBtn = styled.button`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ChooseImg = styled.img`
  width: 150px;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 150px;
  }
`
export const Button = styled.button`
  width: ${props => (props.startbtn ? '150px' : 'auto')};
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  font-family: Bree Serif;
  padding: ${props => (props.startbtn ? '10px' : '8px 15px')};
  border-radius: ${props => (props.startbtn ? '10px' : '5px')};
  align-self: ${props => (props.startbtn ? 'inherit' : 'flex-end')};
  margin-top: ${props => (props.startbtn ? '10px' : '50px')};
  margin-right: ${props => (props.startbtn ? '0px' : '20px')};
`
// Result Box
export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const ResultImagesBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const ResultImgBox = styled(ResultBox)`
  max-width: 100px;
  text-align: center;
`
export const ResultImgBoxPara = styled.p`
  font-size: ${props => (props.sFont ? '24px' : '36px')};
  font-weight: 600;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  margin: 0;
  margin-top: ${props => (props.sFont ? '0' : '20px')};
`
export const ResultImgBoxImg = styled(ChooseImg)`
  width: 150px;
`
export const ResultHeading = styled.h1`
  font-size: 32px;
  color: #fff;
  font-family: Roboto;
  text-align: center;
`
// Pop Up
export const PopupBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  max-width: 500px;
  padding: 20px;
`
export const CancelPopUpBtn = styled.button`
  border: none;
  padding: 5px;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const PopUpImg = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  margin: auto;
  max-height: 300px
  aspect-ratio: 1/1;
`
