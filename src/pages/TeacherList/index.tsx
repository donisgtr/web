import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assests/images/logo.svg";
import backIcon from "../../assests/images/icons/back.svg";

import PageHeader from '../../compoments/PageHeader';

import "./styles.css";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis." />
        </div>
    )
}

export default TeacherList;
