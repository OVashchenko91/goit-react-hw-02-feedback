import styled from '@emotion/styled';

export const Ul = styled.ul`
   display: flex;
   justify-content: center;
   padding: 30px;
   background-color: lightgrey;
   width: 100%;
   box-sizing: border-box;
   gap: 25px;
`;


export const Button = styled.button`
    border-radius: 20px;
    box-shadow: 0px 2px 5px lightgrey;
    height: 40px;
    width: 80px;
    //background-color: lightcyan;
    text-transform: lowercase;
    font-weight: 550;
    border-width: 0;

    background-color: ${props => {
        switch(props.name){
            case 'good' :
                return 'rgb(33 237 33)';
            case 'neutral' :
                return 'rgb(255 235 59)';
            case 'bad' :
                return 'rgb(233 19 19)';
            default:
                return 'blue'
        }
    }}
`;


export const Li = styled.li`
    
`;