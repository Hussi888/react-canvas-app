import React from 'react';
import { Outer } from './styledComponents/Style';
import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart/src";

const SidebarItem = ({ id, type, ports, properties }) => {
	return (
		<Outer
			draggable={true}
			onDragStart={(event) => {
				event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ id, type, ports, properties }))
			}}		

		>{type}
		</Outer>
	)
}

export default SidebarItem;