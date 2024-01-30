import React from 'react'
import * as C from './styles'
import ResumeItem from '../ResumeItem'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa';

const Resume = () => {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="500" />
        <ResumeItem title="Total" Icon={FaDollarSign} value="500" />
    </C.Container>
  )
}

export default Resume