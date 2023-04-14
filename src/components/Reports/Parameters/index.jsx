import { Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParameterModalVisibility } from '../../../redux/modalSlice';
import { Checkbox, Divider } from 'antd';
import { setParametersSlice } from '../../../redux/parametersSlice';
import { useTranslation } from 'react-i18next';
const CheckboxGroup = Checkbox.Group;

const Parameters = () => {
	const { t } = useTranslation();
	const open = useSelector(state => state.modal.parameterModalVisibility);
	const a = useSelector(state => state.parametersSlice);
	const dispatch = useDispatch();
	console.log(a, 'a');

	const plainOptions = [
		t('reports_page.parameters_information_about_amount'),
		t('reports_page.parameters_information_about_date'),
	];
	const defaultCheckedList = [
		t('reports_page.parameters_information_about_amount'),
		t('reports_page.parameters_information_about_date'),
	];

	const [confirmLoading, setConfirmLoading] = useState(false);
	const [checkedList, setCheckedList] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);

	const onChange = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
		console.log(checkedList, 'list');
	};

	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			dispatch(setParameterModalVisibility());
			dispatch(
				setParametersSlice({
					priceInfo: checkedList.includes(t('reports_page.parameters_information_about_amount')) ? true : false,
					dateInfo: checkedList.includes(t('reports_page.parameters_information_about_date')) ? true : false,
				})
			);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		dispatch(setParameterModalVisibility());
	};

	return (
		<Modal
			title={t('reports_page.parameters_modal_title')}
			okText={t('modal.modal_save')}
			cancelText={t('modal.modal_cancel')}
			open={open}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			cancelButtonProps={{ disabled: confirmLoading ? true : false }}
			onCancel={handleCancel}>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				{t('reports_page.parameters_cancel_all')}
			</Checkbox>
			<Divider />
			<CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
		</Modal>
	);
};

export default Parameters;
