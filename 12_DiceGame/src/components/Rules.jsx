import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play the dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on the dice image</p>
        <p>After clicking on the dice, if selected number is equal to the dice number you will get some points as dice</p>
        <p>If you guess wrong, then 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`