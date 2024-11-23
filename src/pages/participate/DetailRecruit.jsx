import React, { useEffect, useState } from 'react';
import LoginAfterHeader from '../../components/Header/LoginAfterHeader';
import { useParams } from 'react-router-dom';
import {
	Rcontent,
	RprojectName,
	RprojectTitle,
	RprojectCategory,
	LargeProfilePhoto,
	RprojectnickName,
	Rprojectcontent,
	Rapicontent,
	Recruitdiv,
	Recruitlinkinfo,
	Rincontentphoto,
	RecruitInfoContent,
} from '../../styles/Partici_Mang/RecruiteStyles';
import profilepic2 from '../../components/Participate/img/profilepic2.png';
import urllink from '../../components/Participate/img/url-link.png';
import FormApplyBTN from '../../components/Participate/Button/FormApplyBTN';
import axios from 'axios';

const DetailRecruit = () => {
	const [projectData, setProjectData] = useState([]);
	const [recruite, setRecruite] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://run.mocky.io/v3/f0f0261a-e077-4c98-95b0-b1ad96153cf7',
					{
						headers: {
							Accept: 'application/json',
						},
					}
				);
				const data = await response.json();
				if (Array.isArray(data)) {
					setProjectData(data);
					const selectedProject = data.find((project) => project.id === id);
					setRecruite(selectedProject || null);
				} else if (data.projectData && Array.isArray(data.projectData)) {
					setProjectData(data.projectData);
					const selectedProject = data.projectData.find(
						(project) => project.id === id
					);
					setRecruite(selectedProject || null);
				} else {
					console.error('Unexpected data format:', data);
				}
			} catch (error) {
				console.error('Error fetching Project data: ', error);
			}
		};
		fetchData();
	}, [id]);

	if (!recruite) {
		return <div>Loading...</div>;
	}

	const Recruitinfo = ({ title, result }) => {
		return (
			<div>
				<Rprojectcontent>{title}</Rprojectcontent>
				<Rapicontent>{result || '정보 없음'}</Rapicontent>
			</div>
		);
	};

	const RemainMembNum = recruite.contributorNum - recruite.nowConNum;

	return (
		<>
			<LoginAfterHeader />

			<Rcontent>
				<RprojectName>{recruite.projectName}</RprojectName>
				<div>
					<RprojectTitle>{recruite.title}</RprojectTitle>
					<RprojectCategory>{recruite.category}</RprojectCategory>
					<br />
					<RprojectnickName>
						<LargeProfilePhoto src={profilepic2} alt='모집인원아이콘' />
						{recruite.nickName}
					</RprojectnickName>
					<Recruitdiv>
						<Recruitinfo
							title='모집포지션'
							result={recruite.recruitmentPosition}
						/>
						<Recruitinfo title='모집 인원' result={`${RemainMembNum}명`} />
						<Recruitinfo title='프로젝트 분야' result={recruite.category} />
						<Recruitinfo title='모집 마감일' result={recruite.deadLine} />
					</Recruitdiv>
					링크
					<Recruitlinkinfo>
						<Rincontentphoto src={urllink} alt='url-link' />
						{recruite.link}
					</Recruitlinkinfo>
					<RecruitInfoContent>{recruite.content}</RecruitInfoContent>
				</div>
			</Rcontent>
		</>
	);
};

export default DetailRecruit;
