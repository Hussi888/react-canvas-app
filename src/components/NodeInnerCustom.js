import React, { useEffect } from "react";
import { Outer, Input } from './styledComponents/Style';
import { addProperty, addId } from '../Actions/AddElement';
import { connect } from 'react-redux';
import { useState } from 'react';
import {SelectedSidebar} from './SelectedSidebar'
import Canvas from './Canvas';
import { addElement } from '../Actions/AddElement';
import { Callback } from './callback';


const NodeInnerCustom = ({ node, addProperty, chart}) => {


	const updatePropertiesBar = (id, type ) => {
		
		Callback(node);
		addId(id, type);

	}

	const [value, setValue] = useState('');

	const keyHandlerForProperties = (e, id) => {
		if (e.keyCode === 13) {
			addProperty(value, id);
		}
	  }
	switch (node.type) {
		case 'output-only':
			return (
				
				<Outer onClick={() => updatePropertiesBar()}
				>
					<p>Use Node inner to customise the content of the node</p>
				</Outer>
			)
			case 'type1':
				return (
					<Outer  onClick={() => updatePropertiesBar()}>
					{/* {console.log(node.properties)} */}
					<p>Lorem Ipsum type1</p>
					<br />
					<Input
						type="string"
						placeholder="path"
						onChange={(e) => setValue(e.target.value)}
						onKeyDown={(e) => keyHandlerForProperties(e, node.id)}
						onClick={(e) => e.stopPropagation()}
						onMouseUp={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
					/>
				</Outer>
			)
		case 'type2':
			return (
				<Outer  onClick={() => updatePropertiesBar()}>
					<p>Lorem Ipsum type2</p>
					<Input
						type="number"
						placeholder="level"
						onChange={(e) => console.log(e)}
						onClick={(e) => e.stopPropagation()}
						onMouseUp={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
					/>
				</Outer>
			)
		case 'type3':
			return (
				<Outer  onClick={() => updatePropertiesBar()}>
					<p>Lorem Ipsum type3</p>
					<br />
					<Input
						type="string"
						placeholder="path to page"
						onChange={(e) => console.log(e)}
						onClick={(e) => e.stopPropagation()}
						onMouseUp={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
					/>
				</Outer>
			)
		case 'new Element':
			return (
				<Outer  onClick={() => updatePropertiesBar()}>
					<p>New Element</p>
					<br />
					<Input
						type="string"
						placeholder="path to page"
						onChange={(e) => console.log(e)}
						onClick={(e) => console.log(e)}
						onMouseUp={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
					/>
					
				</Outer>
			)
		default:
			return (
				<Outer  onClick={() => updatePropertiesBar()}>
					<p>Lorem Ipsum Default</p>
					<br />
					<Input
						type="number"
						placeholder="Some Input"
						onChange={(e) => console.log(e)}
						onClick={(e) => e.stopPropagation()}
						onMouseUp={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
					/>
					
				</Outer>
			)
	}
}

const mapStateToProps = state => ({
	chart: state.chart,
	age: state.age
})

export default connect(mapStateToProps, { addProperty })(NodeInnerCustom);