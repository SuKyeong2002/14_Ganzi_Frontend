import React, { useState } from 'react';
import * as H from '../../styles/HomeStyle';
import Header from '../../components/Header/HomeHeader';
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import Button from '../../components/button/HomeButton';
import About from '../../pages/home/About';

const Home = () => {

  return (
    <H.Home>
      <Header /> 
      <H.RowBox>
        <H.IconBox>
          <H.Icon src={HomeIcon} alt="Home Icon" />
        </H.IconBox>
        <H.ContentBox>
          <H.Content>ProLink</H.Content>
          <H.Introduction>프로젝트와 팀을 이어주는 “프로링크”</H.Introduction>
        </H.ContentBox>
      </H.RowBox>
      <H.ButtonBox>
        <Button />
      </H.ButtonBox>
      <H.AboutSection>
        <About />
      </H.AboutSection>
    </H.Home>
  );
  
};

export default Home;
