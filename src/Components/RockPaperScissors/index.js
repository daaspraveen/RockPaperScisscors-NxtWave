import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  RockPaperScissorsContainer,
  RockPaperScissorsBox,
  ContentBox,
  HeaderBox,
  HeaderNamesBox,
  Heading,
  ScoreBox,
  ScoreName,
  ScoreValue,
  ChooseUlBox,
  ChooseLiItem,
  ChooseBtn,
  ChooseImg,
  Button,
  ResultBox,
  ResultImagesBox,
  ResultImgBox,
  ResultImgBoxPara,
  ResultImgBoxImg,
  PopupBox,
  CancelPopUpBtn,
  PopUpImg,
} from './styledComponent'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameResult: '',
    randomChoice:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    choosedChoice:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  }

  chooseLiItemCard = (itemData, doUpdateFunc, choicesList) => {
    const {id, imageUrl} = itemData
    const buttonTestId = `${id.toLowerCase()}Button`
    return (
      <ChooseLiItem key={id}>
        <ChooseBtn
          type="button"
          data-testid={buttonTestId}
          onClick={() => doUpdateFunc(imageUrl, choicesList)}
        >
          <ChooseImg src={imageUrl} alt={id} />
        </ChooseBtn>
      </ChooseLiItem>
    )
  }

  checkOutcome = (randomId, choosedId) => {
    if (randomId === choosedId) {
      return 'IT IS DRAW'
    }
    if (
      (choosedId === 'ROCK' && randomId === 'SCISSORS') ||
      (choosedId === 'PAPER' && randomId === 'ROCK') ||
      (choosedId === 'SCISSORS' && randomId === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  updateChoosenChoice = (userChosenImg, choicesList) => {
    const random = Math.floor(Math.random() * choicesList.length)
    const randomId = choicesList[random].id
    const randomChoosedImage = choicesList[random].imageUrl
    const choosedId = choicesList.filter(
      each => each.imageUrl === userChosenImg,
    )[0].id
    const resultOutcome = this.checkOutcome(randomId, choosedId)
    // console.log(randomId, choosedId)
    // console.log(resultOutcome)
    this.setState(prevState => {
      let updatedScore = prevState.score
      if (resultOutcome === 'YOU WON') {
        updatedScore += 1
      } else if (resultOutcome === 'YOU LOSE') {
        updatedScore -= 1
      }
      return {
        score: updatedScore,
        choosedChoice: userChosenImg,
        randomChoice: randomChoosedImage,
        gameResult: resultOutcome,
      }
    })
  }

  playAgainReset = () => {
    this.setState({
      score: 0,
      choosedChoice: '',
      randomChoice: '',
      gameResult: '',
    })
  }

  render() {
    const {score, gameResult, randomChoice, choosedChoice} = this.state
    // console.log(score, gameResult)
    const {choicesList} = this.props
    return (
      <RockPaperScissorsContainer>
        <RockPaperScissorsBox>
          <ContentBox>
            <HeaderBox>
              <HeaderNamesBox>
                <Heading>
                  ROCK <br /> PAPER <br /> SCISSORS
                </Heading>
              </HeaderNamesBox>
              <ScoreBox>
                <ScoreName>Score</ScoreName>
                <ScoreValue>{score}</ScoreValue>
              </ScoreBox>
            </HeaderBox>
            {gameResult.length === 0 ? (
              <ChooseUlBox>
                {choicesList.map(each =>
                  this.chooseLiItemCard(
                    each,
                    this.updateChoosenChoice,
                    choicesList,
                  ),
                )}
              </ChooseUlBox>
            ) : (
              <ResultBox>
                <ResultImagesBox>
                  <ResultImgBox>
                    <ResultImgBoxPara sFont>YOU</ResultImgBoxPara>
                    <ResultImgBoxImg src={choosedChoice} alt="your choice" />
                  </ResultImgBox>
                  <ResultImgBox>
                    <ResultImgBoxPara sFont>OPPONENT</ResultImgBoxPara>
                    <ResultImgBoxImg src={randomChoice} alt="opponent choice" />
                  </ResultImgBox>
                </ResultImagesBox>
                <ResultImgBoxPara>{gameResult}</ResultImgBoxPara>
                <Button type="button" startbtn onClick={this.playAgainReset}>
                  PLAY AGAIN
                </Button>
              </ResultBox>
            )}
          </ContentBox>
        </RockPaperScissorsBox>
        <Popup trigger={<Button type="button">RULES</Button>} modal nested>
          {close => (
            <PopupBox>
              <CancelPopUpBtn type="button" onClick={close}>
                <RiCloseLine size={20} />
              </CancelPopUpBtn>
              <PopUpImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupBox>
          )}
        </Popup>
      </RockPaperScissorsContainer>
    )
  }
}

export default RockPaperScissors
