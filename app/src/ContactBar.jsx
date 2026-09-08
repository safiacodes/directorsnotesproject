//import { useState } from "react";

const ContactBar = () => {
    const [isDisplayed, setIsDisplayed] = React.useState(false);

    const toggle = () => {
        setIsDisplayed(!isDisplayed);
    }

    //trying to create an onclick contact button in the contact expandable section
    //return (
        //<li class="nav"><a href="#" onClick={()}>Contact</a></li>

    //)

    /*return (
        <>
        <ContactBarContainer>
            <IconsContainer isOpen={ isDisplayed }>
                <IconContainer>
                    <a href=""></a> 
                </IconContainer>
            </IconsContainer>
            <ContactBarArrowContainer onClick={ toggle }>
                <ContactBarArrowIcon isOpen={ isDisplayed }/>
            </ContactBarArrowContainer>
        </ContactBarContainer>
        </>
    )*/
}

//export default ContactBar;

//once figured out add a contactbar tag in the html and export here and inport on the App