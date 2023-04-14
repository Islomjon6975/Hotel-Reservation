import { Checkbox, Divider } from 'antd';
import { useState } from 'react';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Miqdori haqida ma'lumot", "Sana haqida ma'lumot"];
const defaultCheckedList = ["Miqdori haqida ma'lumot", "Sana haqida ma'lumot"];
const ParametersContent = () => {
	const [checkedList, setCheckedList] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);
	const onChange = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
		console.log(list, 'list');
	};
	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};
	return (
		<>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				Barchasini bekor qilish
			</Checkbox>
			<Divider />
			<CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
		</>
	);
};
export default ParametersContent;
