import styled from 'styled-components';

export const ProjectListRow = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 3vw;
	margin-top: 20px;
	display: flex;
	justify-content: center;
`;

export const SingleProjectdiv = styled.div`
	border: 1px;
	/*background-color: yellow;*/
	background-color: ${({ theme }) => theme.color.gray1};
	width: 555px;
	height: 310px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding-top: 32px;
	padding-left: 37px;
	border: none;
	border-radius: 25px;
`;

export const Pprojectdate = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
`;

export const PprojectName = styled.div`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
`;

export const PprojectTitle = styled.div`
	color: ${({ theme }) => theme.color.gray6};
	line-height: 29px;
	font-size: 24px;
	font-weight: 600;
`;

export const PprojectContents = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 400;
	line-height: 32px;
`;
export const PprojectNickname = styled.div`
	color: ${({ theme }) => theme.color.gray5};
	font-family: Pretendard;
	font-size: 20px;
	font-weight: 600;
	line-height: 60px;
	display: flex;
`;

export const PprojectProfilephoto = styled.img`
	width: 56px;
	height: 56px;
	margin-right: 16px;
	overflow: hidden;
`;
export const Pprojectctrpic = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 11px;
	overflow: hidden;
`;

export const Pprojectctrb = styled.div`
	color: ${({ theme }) => theme.color.gray4};
	font-size: 20px;
	justify-content: right;
	margin-right: 76px;
`;
export const ProjectRow = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 29px;
`;
