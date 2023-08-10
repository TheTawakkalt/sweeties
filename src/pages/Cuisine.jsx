import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {useLocation} from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  let {search } = useLocation();  console.log({search})

  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  const getCuisine = async (name, type) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&type=${type}`
      
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    const type = query.get('type');
    getCuisine(params.type, type);
    console.log(params.type);
  }, [params.type]);


  return <Grid>
    {cuisine.map((item) => {
        return (
            <Card key= {item.id}>
                <img src ={item.image} alt="" />
                <h4>{item.title}</h4>
            </Card>
        )
    })}
  </Grid>;
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`; 

export default Cuisine;
