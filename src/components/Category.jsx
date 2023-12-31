import { FaBirthdayCake, FaIceCream } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaBirthdayCake />
        <h4>Italian</h4>
      </SLink>

      <SLink to={'/cuisine/french&type=dessert'}>
        <FaIceCream />
        <h4>Dessert</h4>
      </SLink>

      <SLink to={'/cuisine/Asian'}>
        <GiNoodles />
        <h4>Asian</h4>
      </SLink>

      <SLink to={'/cuisine/Korean'}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%; 
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}

svg{
    color: white;
    font-size: 1.5rem;
}
&.active{
    background: linear-gradient(to right, #FFC4C4, #e94057);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
}
`;

export default Category;
