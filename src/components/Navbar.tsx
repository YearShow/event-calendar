import { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from './../hooks/useTypedSelector';

const Navbar: FC = () => {
	const router = useHistory();
	const { isAuth } = useTypedSelector(state => state.auth)
	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>Xsan</div>
						<Menu theme='dark' mode='horizontal' selectable={false}>

							<Menu.Item
								key={1}
								onClick={() => console.log('выйти')}
							>
								Выйти
							</Menu.Item>
						</Menu>
					</>
					:
					<>
						<div></div>
						<Menu theme='dark' mode='horizontal' selectable={false}>
							<Menu.Item
								key={2}
								onClick={() => router.push(RouteNames.LOGIN)}
							>
								Login
							</Menu.Item>
						</Menu>
					</>
				}

			</Row>
		</Layout.Header>
	);
};

export default Navbar;