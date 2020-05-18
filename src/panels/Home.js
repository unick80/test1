import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser, src, qrcode}) => (
	<Panel id={id}>
		<PanelHeader>Код скидки</PanelHeader>
		{//fetchedUser &&
		//<Group title="User Data Fetched with VK Bridge">
		//	<Cell
		//		before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
		//		description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
		//	>
		//		{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
		//</Group></Group>	</Cell>
		//</Group>
		}

		<Group title="Код скидки">
			<Div>
				<center>
					<img src={src} alt="QRcode"/>
					<p><h1>{qrcode}</h1></p>
				</center>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	qrcode: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
