import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { mapValues } from 'lodash';
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import SidebarItem from './SidebarItem'
import * as actions from "@mrblenny/react-flow-chart";
import { Sidebar, Content, PageContent, PageContentRight } from './styledComponents/Style';
import { connect } from 'react-redux';
import { addElement, addId } from '../Actions/AddElement';
import { storeChart } from '../Actions/StoreChart';
import NodeInnerCustom from './NodeInnerCustom';
import SelectedSidebar from './SelectedSidebar';

import { SidebarUpdate } from './callback';

const id = 0, type = 0

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

export var updateProperties;
export var setProperties;
export var deleteNode;

const DragAndDropSidebar = ({ addElement, storeChart,
	configData,
	config: { elements } }) => {

	const [chart, setChart] = useState(JSON.parse(localStorage.getItem("chart")) ? JSON.parse(localStorage.getItem("chart")) : configData);
	
	
	const stateActions = mapValues(actions, (any) =>
		(...args) => this.setState(...args));

	const forceUpdate = useForceUpdate();
		
	updateProperties = (node) => {
		chart.selected = node;
		SidebarUpdate(node);
	}

	setProperties = (id, type, properties) => {
		if(id != chart.selected.id){
			var nodeId = chart.selected.id;
			chart.nodes[id] = chart.nodes[chart.selected.id];
			delete chart.nodes[chart.selected.id];
			chart.nodes[id].id = id;	
			Object.entries(chart.links).map(link => {
				if(link[1].from.nodeId == nodeId){
					chart.links[link[1].id].from.nodeId = id;
				}
				if(link[1].to.nodeId == nodeId){
					chart.links[link[1].id].to.nodeId = id;
				}
			})
		}
		chart.nodes[chart.selected.id].type = type;
		chart.nodes[chart.selected.id].properties = properties;
		chart.selected = chart.nodes[id];
		// console.log(chart);
		forceUpdate();
	}

	deleteNode = () => {
		if(chart.selected == null)
			return;
		var nodeId = chart.selected.id;
		Object.entries(chart.links).map(link => {
			if(link[1].from.nodeId == nodeId || link[1].to.nodeId == nodeId){
				delete chart.links[link[1].id];
			}
		})
		delete chart.nodes[chart.selected.id];
		chart.selected = null;
		// console.log(chart);
		forceUpdate();
	}

	useEffect(() => {
		storeChart(chart);
	}, [storeChart])


	const _addElement = () => {
		addElement();
	}

	const _addId = (id, type) => {
		addId(id, type)
	}

	const validateLink = (link) => {
		setChart(link.chart)
		if (link.fromNodeId === link.toNodeId) {
			return false
		}
		return true;
	}

	const setDataLocalStorage = () => {
		localStorage.setItem("chart", JSON.stringify(chart))
	}

	const getDataLocalStorage = () => {
		window.location.reload();
		setChart(JSON.parse(localStorage.getItem("chart")));
	}
	// console.log(chart);

	return (
		<>
			<PageContent>
				<Content>
				
					<FlowChartWithState 
						initialValue={chart}
						config={{ snapToGrid: true, validateLink }}
						Components={{ NodeInner: NodeInnerCustom }}				
						callbacks={stateActions}
					/>
					
					
				</Content>


				<Sidebar>

				<SelectedSidebar onClick={() => _addId()} id={id} type={type}/>
					{elements && elements.map(element => (
						<SidebarItem
							type={element.type}
							ports={element.ports}
							properties={element.properties}
						/>
					))}
					<button type="button" onClick={() => _addElement()}>Add JSON element</button>
					<button type="button" onClick={() => getDataLocalStorage()}>Get Local Storage Diagram</button>
					<button type="button" onClick={() => setDataLocalStorage()}>Save to local Storage</button>
					 
				</Sidebar>
				
			</PageContent>
		</>
	)
}


const mapStateToProps = state => ({
	config: state.config
})

const _addProperty = (ids, types) => {
	id = ids
	type = types
  }


export default connect(mapStateToProps, { addElement, storeChart })(DragAndDropSidebar);
