import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
  return  <AnnouncementContainer>Super Deal! Free Shipping on Order Above 50$</AnnouncementContainer>
  
}

export default Announcement;

const AnnouncementContainer = styled.div`
  background-color:teal;
  height: 4rem;
  font-size: 1.8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`