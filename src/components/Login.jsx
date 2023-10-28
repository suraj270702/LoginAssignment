import React from 'react'
import styled,{css} from 'styled-components'

const Login = () => {
    const Wrapper = styled.div`
    padding : 20px;
    display : flex;
    gap : 130px;
    @media (max-width: 1024px) {
        flex-direction: column;
        gap:40px;
      }
    
    `
    const Left = styled.div `
    width : 400px;
    @media (max-width: 1024px) {
        width: 100%; 
      }
    
    
    `

    const Img = styled.img `
    
    width : 450px;
    height : 800px;

    @media (max-width: 1024px) {
        width: 100%; 
        height : auto;
        
      }
    

    `
    

    const Right = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.05);
    padding: 80px 60px;
    width: 100%; /* Expand to full width on smaller screens */
  max-width: 900px; /* Add a maximum width to prevent excessive expansion */
  height: auto; /* Allow height to adapt to content */
  @media (max-width: 1024px) {
    max-width: 100%; /* Full width for screens <= 1024px */
    padding: 20px; /* Further reduce padding for small screens */
  }
    
    `
    const Heading = styled.h1`
   
    font-size : 2.5rem;
    font-weight : bold;
    text-align:center;
    margin-bottom : 1.5rem;


    `

    const ElementWrapper = styled.div`
    
    margin-bottom : 2rem;
    display : flex;
    flex-direction : column;
    
    `

    const SpanTag = styled.span `
    font-size: 0.95rem;
    
    
    `
    const InputTag = styled.input`
    
    padding : 10px;
    color : gray;
    margin-top : 1rem;
    font-size : 0.9rem;
    outline : none;

    @media (max-width: 1024px) {
        width: 100%; 
        
      }



    `
    
    const ChangePasswordWrapper = styled.div `

     display : flex;
     justify-content : space-between;

    `
    const RememberWrapper = styled.div`
    
    display : flex;
    gap:10px;
    margin-bottom : 2rem;

    `

    const RememberTag = styled.span `
    font-size: 0.95rem;
    color : gray;
    
    `

    const ChangePasswordTag = styled.span `
    
    font-size : 0.95rem;
    color:rgb(227, 177, 70);
    cursor : pointer;

    `

    const AgreeWrapper = styled.div`
    
    display : flex;
    gap:10px;
    margin-bottom : 2rem;

    `

    const Agree = styled.span`
    
    font-size: 0.95rem;
    color : gray;

    
    `

    const AgreeYellow = styled.span`
    
    font-size : 0.95rem;
    color:rgb(227, 177, 70);
    text-decoration: underline;
    cursor : pointer;
    
    
    `

    const Button = styled.button`
    
    padding : 10px;
    text-align : center;
    width : 400px;
    color : white;
    font-size : 1rem;
    background : rgb(19, 71, 148);
    border : none ;
    border-radius : 5px;
    margin-left : 160px;
    cursor : pointer;
    
    &:hover {
        background : blue;
    }
    margin-bottom : 2rem;

    @media (max-width: 1024px) {
        width: 100%; 
        margin-left : 0;
        
      }
    
    `

    const AccountWrapper = styled.div`
    
    display : flex;
    align-items : center ;
    justify-content : center;
    max-width : 400px;
    width : 100%;
    margin-left : 160px;

    @media (max-width: 1024px) {
        width: 100%; 
        
        margin-left : 0px;
        
        
      }
    
    `
    const AccountText = styled.span`
    font-size: 0.95rem;
    color : gray;
    
    `

    const AccountYellow = styled.span`
    font-size : 0.95rem;
    color:rgb(227, 177, 70);
    text-decoration: underline;
    cursor : pointer;
    
    `

    
   

  return (
    <Wrapper>

    <Left>
        <Img src='https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg' alt='' />
    </Left>
    <Right>
        <Heading>Login</Heading>
        <ElementWrapper>
        <SpanTag>Login ID</SpanTag>
        <InputTag placeholder='Enter Login Id'/>
        </ElementWrapper>
        
       
        <ElementWrapper>
        <SpanTag>Password</SpanTag>
        <InputTag type='password'  placeholder='Enter Password'/>
        
        </ElementWrapper>
        
        

        <ChangePasswordWrapper>
            <RememberWrapper>
                <input type='checkbox' />
                <RememberTag>Remember Me</RememberTag>
                
            </RememberWrapper>
            <ChangePasswordTag>Change Password</ChangePasswordTag>
        </ChangePasswordWrapper>
        <AgreeWrapper>
        <input type='checkbox' />
        <span><Agree>Agree to</Agree><AgreeYellow> Terms & Conditions</AgreeYellow></span>
        </AgreeWrapper>
        <Button>Login</Button>
        <AccountWrapper>
            <AccountText>Don't have an account?<AccountYellow>Register Here</AccountYellow></AccountText>
        </AccountWrapper>
    </Right>

        
    </Wrapper>
  )
}



export default Login