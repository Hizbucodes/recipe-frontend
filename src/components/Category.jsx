import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Category = () => {
  return (
   
        <List>
            <Link to='/cuisine/Italian'>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </Link>

            <Link to='/cuisine/American'>
                <FaHamburger/>
                <h4>American</h4>
            </Link>

            <Link to='/cuisine/Thai'>
                <GiNoodles/>
                <h4>Thai</h4>
            </Link>

            <Link to='/cuisine/Japanese'>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </Link>
        </List>

  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category