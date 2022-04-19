import { Form } from 'antd';
import { FC } from 'react';


const LoginForm: FC = () => {
	return (
		<Form>
			<Form.Item
				label="Имя пользователя"
				name="username"
				rules={[{ required: true, message: "Пожалуйста, введите имя пользователя!" }]}
			>

			</Form.Item>
			<Form.Item
				label="Пароль"
				name="password"
				rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
			>

			</Form.Item>
		</Form>
	)
}

export default LoginForm;