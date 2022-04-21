import { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';

const Navbar: FC = () => {
	const router = useHistory();
	const { isAuth, user } = useTypedSelector(state => state.auth);
	const { logout } = useActions();

	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>
							{user.username}
						</div>
						<Menu theme='dark' mode='horizontal' selectable={false}>

							<Menu.Item
								key={1}
								onClick={logout}
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