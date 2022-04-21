import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { FC, useState } from 'react'
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules';
import { IEvent } from './../models/IEvent';

interface EventFormProps {
	guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: ''
	} as IEvent)

	return (
		<Form>
			<Form.Item
				label="Описание события"
				name="description"
				rules={[rules.required()]}
			>
				<Input

				/>
			</Form.Item>
			<Form.Item
				label="Дата события"
				name="date"
				rules={[rules.required()]}
			>
				<DatePicker />
			</Form.Item>
			<Form.Item
				label="Выберите гостя"
				name="guest"
				rules={[rules.required()]}
			>
				<Select onChange={(guest: string) => setEvent({ ...event, guest })}>
					{props.guests.map(guest =>
						<Select.Option key={guest.username} value={guest.username}>
							{guest.username}
						</Select.Option>
					)}
				</Select>
			</Form.Item>
			<Form.Item>
				<Row justify="end">
					<Button type="primary" htmlType="submit">
						Создать
					</Button>
				</Row>
			</Form.Item>
		</Form>
	)
}

export default EventForm;