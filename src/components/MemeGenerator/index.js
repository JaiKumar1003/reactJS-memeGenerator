import {Component} from 'react'

import {
  AppContainer,
  MainHeading,
  MemeGeneratorContainer,
  FormInputContainer,
  FormLabel,
  FormInput,
  SelectContainer,
  OptionInput,
  FormGenerateButton,
  MemeGeneratorBg,
  MemeGeneratorText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
    isGenerate: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state

    if (
      imageUrl !== '' &&
      topText !== '' &&
      bottomText !== '' &&
      fontSize !== ''
    ) {
      this.setState({isGenerate: true})
    } else {
      this.setState({isGenerate: false})
    }
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isGenerate} = this.state
    console.log(isGenerate)
    return (
      <AppContainer>
        <MainHeading>Meme Generator</MainHeading>
        <MemeGeneratorContainer data-testid="meme">
          {isGenerate && (
            <MemeGeneratorBg imageUrl={imageUrl}>
              <MemeGeneratorText fontSize={fontSize}>
                {topText}
              </MemeGeneratorText>
              <MemeGeneratorText fontSize={fontSize}>
                {bottomText}
              </MemeGeneratorText>
            </MemeGeneratorBg>
          )}
          <FormInputContainer onSubmit={this.onSubmitForm}>
            <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
            <FormInput
              id="imageUrl"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
              type="text"
              placeholder="Enter The Image URL"
            />
            <FormLabel htmlFor="topText">Top Text</FormLabel>
            <FormInput
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
              type="text"
              placeholder="Enter The Top Text"
            />
            <FormLabel htmlFor="bottomText">Bottom Text</FormLabel>
            <FormInput
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
              type="text"
              placeholder="Enter The Bottom Text"
            />
            <FormLabel htmlFor="fontSize">Font Size</FormLabel>
            <SelectContainer id="fontSize" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(eachItem => {
                const {optionId, displayText} = eachItem

                return (
                  <OptionInput key={optionId} value={optionId}>
                    {displayText}
                  </OptionInput>
                )
              })}
            </SelectContainer>
            <FormGenerateButton type="onSubmit">Generate</FormGenerateButton>
          </FormInputContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
