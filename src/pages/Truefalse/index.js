import React from "react";
import styled from "styled-components";
import { Button, Checkbox } from "antd";


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function True({setFavPage}) {
  return (
      <div>
        <Wrapper>
          <h1>
            <b>Baseline Data Collection</b>
          </h1>
          <div>
          <br />
            <label>
              <h1><b>operational Data</b></h1>
            </label>
          <Checkbox onChange={onChange}>Energy</Checkbox><br/>
          <Checkbox onChange={onChange}>Water</Checkbox><br/>
          <Checkbox onChange={onChange}>Waste</Checkbox><br/>
          <br />
            <label>
              <h1><b>Supply Chain Data</b></h1>
            </label>
            <Checkbox onChange={onChange}>Energy</Checkbox><br/>
          <Checkbox onChange={onChange}>Water</Checkbox><br/>
          <Checkbox onChange={onChange}>Waste</Checkbox><br/>
          <br />
            <label>
              <h1><b>Certifications</b></h1>
            </label>
          <Checkbox onChange={onChange}>Facility</Checkbox><br/>
          <Checkbox onChange={onChange}>Ingredient Sourcing</Checkbox><br/>
          <Checkbox onChange={onChange}>Carbon Credits</Checkbox><br/>
            <br /> 
            <Button
            onClick={()=>setFavPage('Question')}
              style={{
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#8c8c8c',
                color: "white",
                borderRadius: "6px",
                marginTop: "3em",
                width: '40%',
                height: 40
              }}
            >
             <b>Back</b>
            </Button>
            
            <Button
              style={{
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e68420',
                color: "white",
                marginTop: "3em",
                borderRadius: "6px",
                marginLeft: "5em",
                width: '40%',
                height: 40
              }}
              onClick={()=>{setFavPage('Plan')}}
            >
              <b>Next</b>
            </Button>
          </div>
        </Wrapper>
      </div>
  );
}

const Wrapper = styled.section`
  padding: 1em;
  background: white;
`;


export default True;
