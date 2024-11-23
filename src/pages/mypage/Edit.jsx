import React from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import UserCategory from '../../components/user/UserCategory';
import UserWithdraw from '../../components/user/UserWithdraw';
import UserEdit from '../../components/user/UserEdit';
import * as DB from '../../styles/Button/DefaultButtonStyle';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();

    return (
        <>
            <LoginAfterHeader />
            <UserEdit />
            <UserCategory />
            <UserWithdraw />
            <DB.EditButton onClick={() => {  }}>수정하기</DB.EditButton> 
        </>
    );
};

export default Edit;
