import React from 'react';
import Heading from './utilities/Heading';
import Paragraph from './utilities/Paragraph';
import UL from "../components/utilities/UL";
import LI from "../components/utilities/LI";
import listItem from '../listItem';
import { description,essential,material,garmentWeight } from "../data";

function Main() {
  return (
    <div className="container overflow-hidden bg-light ">
      <div className="row gy-5 py-4 " >
        <div className="col col-lg-4 col-md-6 col-sm-12 p-3" >

          {/* DESCRIPTION */}
          <div className="" >
            <Heading className="description mb-4" heading="DESCRIPTION" />
            <Paragraph className="description-text lh-base mb-5" text={description} />
          </div>

          {/* MATERIAL */}
          <div className="" >
            <Heading className="material mb-4" heading="MATERIAL" />
            <Paragraph className="material-text lh-base mb-5" text={material} />
          </div>

          {/* GARMENT WEIGHT */}
          <div className="" >
            <Heading className="garment-weight mb-4" heading="GARMENT WEIGHT" />
            <Paragraph className="garment-text lh-base" text={garmentWeight} />
          </div>

          <div className="d-flex mt-5" >
              <div className="circle-1"></div>
              <hr className="hr"/>
              <div className="circle-2"></div>
              <hr className="hr"/>
              <div className="circle-3"></div>
              <hr className="hr"/>
              <div className="circle-2"></div>
              <hr className="hr" />
              <div className="circle-1"></div>
          </div>

        </div>

        {/* SPECIFICATION */}
        <div className="col col-lg-4 col-md-6 col-sm-12 p-3 ">
          <Heading className="specifications ms-3 mb-4" heading="SPECIFICATIONS" />
          <UL>
            {listItem.map(({className, text})=>{
              return <LI className={`mb-1 ${className}`} liText={text} />
            })}
            
          </UL>  
        </div>
        
        {/* ESSENTIAL */}
        <div className="col col-lg-4 col-md-6 col-sm-12 p-3">
          <Heading className="essential mb-4" heading="ESSENTIAL" />
          <Paragraph className="essential-text lh-base" text={essential}/>
        </div>

      </div>
    </div>
  )
}

export default Main;