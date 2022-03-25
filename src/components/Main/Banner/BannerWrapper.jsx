import styled from 'styled-components';

const BannerWrapper = styled.div`
	text-align: center;
	min-height: 250px;

	& > img {
		width: 77%;
		cursor: pointer;
		max-width: 1350px;
		border-radius: 22px;
	}
`;

export default BannerWrapper;
