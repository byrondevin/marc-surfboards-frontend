import axios from "axios";
import './Homepage.css';
import React, {useState} from 'react';

// Image imports
import headerBackground from "../img/header-image-darkened.jpg"
import ecoBoard from "../img/eco-board.jpg"
import shortBoard from "../img/shortboard.jpg"
import longBoard from "../img/longboard.jpg"
import funMidBoard from "../img/fun-mid-board.jpg"



export default function Home() {


  // Function to handle Enquiry form submission. Add enquiry to db
  async function enquirySubmit(e){

    // prevent default redirection/reload
    e.preventDefault();

      //surround the addition to the db with try/catch
      try{

        //axios request to express. add an enquiry to the enquiry collection on DB
        let addEnquiry = await axios.post(`/enquiry` , {name: e.target[0].value, email: e.target[1].value, board: e.target[2].value, message: e.target[3].value});

        alert("Enquiry sent");

      }
      catch(e){

        console.log('ERROR: add enquiry to DB failed')
        console.log(e)

      }

  }



  return (
    <>

      <div className="Homepage container-fluid m-0 p-0">



        {/* ROW - Homepage header */}
        <div className="  text-center headRow p-0 m-0" style={{backgroundImage: `url(${headerBackground})`, backgroundSize: "cover" }}>

          <div className="row text-center">

            <div className="col " id="">

              {/* Logo Image */}
              <div className="divLogoImg p-0" style={{ borderRadius:'30%', overflow: 'hidden', height:'150px', width:'150px', margin:'auto'}}>
            
              </div>

              {/* Heading 1: BrandName and subheading */}
              <div id="heading" className="px-4">

                <h1 className="headingText">Handshaped Surfboards </h1>
                <p className="headingText">Upcycle an old favourite or order a fresh custom </p>

              </div>
            </div>
          </div>

          {/* Header Buttons to each board type */}
           <div className="row py-5 text-center align-items-center">
            
            <div className="col-12 col-md-3 mb-3">
              <a href="#performanceShortboards">
                <button type="button" className="btn btn-light hp-head-btns">Shortboards</button>
              </a>
              {/* With scroll to section onclick */}
              {/* <button onClick={scrollToSection()} type="button" className="btn btn-light hp-head-btns">Shortboards</button> */}
            </div>

            <div className="col-12 col-md-3 mb-3">
              <a href="#ecoBoard">
                <button type="button" className="btn btn-light hp-head-btns">Eco/Upcycled</button>
              </a>
            </div>

            <div className="col-12 col-md-3 mb-3">
              <a href="#longboard">
                <button type="button" className="btn btn-light hp-head-btns">Longboards</button>
              </a>
            </div>

            <div className="col-12 col-md-3 mb-3">
              <a href="#funboards">
                <button type="button" className="btn btn-light hp-head-btns">Mid/Fun Boards</button>
              </a>
            </div>
          </div>
        </div> 




        {/* ROW - Performance shortboards */}
        <div className="row even text-light text-center rowBoardType align-items-center  py-5" id="shortboardsContainer">

          <div className="col-12 col-sm-6">

            {/* heading 2: shortboard */}
            <h2 id='performanceShortboards'>Performance Shortboards</h2>
            {/* p: Pricerange */}
            <p>Price range: R10k - R15k</p>
            {/* button: Enquire */}
            <a href="#contact">
              <button type="button" className="btn btn-primary">Enquire</button>
            </a>

          </div>

          <div className="col-12 col-sm-6">
            {/* image: shortboard */}
            <img 
              className="rounded board-pic my-2 shadow"  
              id="shortboard" src={shortBoard} 
              alt="shortboard-marc-surfboards" 
              width="auto" 
              height="300" 
              display= "block"
            />
          </div>
        </div>



        {/* ROW - Eco/Upcycled Surfboards*/}
        <div className="row odd text-center  rowBoardType align-items-center  py-5 ">

          <div className="col-12 col-sm-6">

            {/* image: ecoboard */}
            <img 
                className="rounded board-pic my-2 shadow"  
                id="ecoBoard" src={ecoBoard} 
                alt="shortboard-marc-surfboards" 
                width="auto" 
                height="300" 
                display= "block"
              />

          </div>

          <div className="col-12 col-sm-6">

            {/* heading 2: Eco/Upcycled Surfboards */}
            <h2>Eco/Upcycled Surfboards</h2>
            {/* p: Pricerange */}
            <p>Price range: R7.5k - R10k</p>
            {/* button: Enquire */}
            <a href="#contact">
              <button type="button" className="btn btn-primary">Enquire</button>
            </a>
          </div>

        </div>



        {/* ROW - Longboards*/}
        <div className="row even text-center text-light rowBoardType align-items-center  py-5">

          <div className="col-12 col-sm-6">

            {/* heading 2: longboard */}
            <h2 id="longboard">Longboards</h2>
            {/* p: Pricerange */}
            <p>Price range: R10k - R20k</p>
            {/* button: Enquire */}
            <a href="#contact">
              <button type="button" className="btn btn-primary">Enquire</button>
            </a>

          </div>


          <div className="col-12 col-sm-6">

            {/* image: longboard */}
            <img 
              className="rounded board-pic my-2 shadow"  
              id="shortboard" src={longBoard} 
              alt="shortboard-marc-surfboards" 
              width="auto" 
              height="300" 
              display= "block"
            />

          </div>
        </div>


        {/* ROW - Midlengths and Funboards*/}
        <div className="row odd text-center rowBoardType align-items-center  py-5">

        <div className="col-12 col-sm-6">

          {/* image: fun/mid board */}
          <img 
              className="rounded board-pic my-2 shadow"  
              id="funboards" src={funMidBoard} 
              alt="shortboard-marc-surfboards" 
              width="auto" 
              height="300" 
              display= "block"
            />
          </div>

          <div className="col-12 col-sm-6">

          {/* heading 2: midlength/funboard */}
            <h2>Midlengths and Funboards</h2>
            {/* p: Pricerange */}
            <p>Price range: R8.5k - R20k</p>
            {/* button: Enquire */}
            <a href="#contact">
              <button type="button" className="btn btn-primary">Enquire</button>
            </a>

          </div>
        </div>



        {/* ROW - Enquiry */}
        <div className="contactRow container my-5">

          {/* Form heading row */}
          <div className="row text-center">
            <div className="col">
              <h2 id="contact">Contact</h2>
            </div>
          </div>

          {/* Enquiry form row */}
          <div className="row text-left align-items-center ">
            <div className="col">
              {/* Enquiry form: submits to enquirySubmit function */}
              <form onSubmit={enquirySubmit}>

                {/* Input: Name  */}
                <div className="form-group">
                  <label for="nameInputEnquiry">Name</label>
                  <input type="text" className="form-control" id="nameInputEnquiry" placeholder="Andrew Pits"/>
                </div>

                {/* Input: Email address */}
                <div className="form-group">
                  <label for="emailInputEnquiry">Email address</label>
                  <input type="email" className="form-control" id="emailInputEnquiry" placeholder="hollow@heaven.com"/>
                </div>

                {/* Input: Board type */}
                <div className="form-group">
                  <label for="boardTypeSelect">Board Type</label>
                  <select className="form-control" id="boardTypeSelect">
                    <option>Shortboard</option>
                    <option>Longboard</option>
                    <option>Funboard</option>
                    <option>Midlength</option>
                    <option>Eco/Uplcycled board</option>
                  </select>
                </div>
                
                {/* Input: Message */}
                <div className="form-group">
                  <label for="messageInput">Message</label>
                  <textarea className="form-control" id="messageInput" rows="3" placeholder="Briefly describe your new board..."></textarea>
                </div>

                {/* Form submit button */}
                <button type="submit" className="btn btn-primary mt-4">Submit Enquiry</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
