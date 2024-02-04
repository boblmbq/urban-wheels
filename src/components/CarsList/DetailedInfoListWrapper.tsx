import uuid from 'react-uuid';
import {
	DetailedInfoListWrapper,
	DetailedInfoTextWrapper,
} from './CarsList.styled';

function DetailedInfoList({
	information,
}: {
	information: (string | number)[];
}) {
	return (
		<DetailedInfoListWrapper>
			{information.map(info => (
				<DetailedInfoTextWrapper key={uuid()}>
					{info}
				</DetailedInfoTextWrapper>
			))}
		</DetailedInfoListWrapper>
	);
}

export default DetailedInfoList;