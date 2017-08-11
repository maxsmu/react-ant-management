import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
const Step = Steps.Step;
export default class BreedingSteps extends Component {
	static defaultProps = {
		steps: []
	};
	static propTypes = {
		initValue: PropTypes.any.isRequired,
		onClickStep: PropTypes.func
	};
	state = {};
	onClick = (currentStep, clickStep) => {
		return () => {
			if (this.props.onClickStep(currentStep, clickStep)) {
				if (currentStep.value !== clickStep.value) {
					this.setState({ current: clickStep.value });
				}
			}
		};
	}
	getActived() {
		const { steps } = this.props;
		// 若是首次初始化则取 initValue 否则 取this.state.current
		const value = this.state.current === undefined ? this.props.initValue : this.state.current;
		return steps.findIndex(item => {
			return item.value === value;
		});
	}
	render() {
		const { steps } = this.props;
		const currentIndex = this.getActived();
		return (
			<Steps current={currentIndex}>
				{
					steps.map(step => {
						return (
							<Step
								style={{ cursor: 'pointer' }}
								key={step.title}
								onClick={this.onClick(steps[currentIndex], step)}
								{...step}
							/>
						);
					})
				}
			</Steps>
		);
	}
}
