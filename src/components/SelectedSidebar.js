import React, { Component, useState, useEffect } from 'react';
import { cloneDeep, mapValues } from 'lodash'
import styled from 'styled-components'
import { FlowChart, identity } from '@mrblenny/react-flow-chart'
import * as actions from '@mrblenny/react-flow-chart'
import SidebarItem from './SidebarItem'
import { Sidebar, Content, PageContent, PageContentRight } from './styledComponents/Style';
import { chartSimple } from '@mrblenny/react-flow-chart'
import { Button} from "react-bootstrap";
import { storeChart } from '../Actions/StoreChart';
import { Message } from './styledComponents/Style';
import { addProperty } from '../Actions/AddElement';
import NodeInnerCustom from './NodeInnerCustom';
import { Delete, SetProperties } from './callback';


export var updateSidebar;

export class SelectedSidebar extends React.Component {

    state = cloneDeep(chartSimple)
 

    constructor(props){
      super(props);
      this.portsList = null;
      this.properties = null;
      let ids = 0;
      
      updateSidebar = (node) => {
        let id=0;
        document.getElementById("ID-input").value = node.id;
        document.getElementById("type-input").value = node.type;
        this.portsList = Object.entries(node.ports).map(function(port){
          return <li>{(port[1].id + ':\t' + port[1].type)}</li>
        })
        this.properties = Object.entries(node.properties).map(function(prop){
          console.log("prop", prop, id)
        return <li>{(prop[0] + ':\t')} 
          <div key={ids++}>
            <input id={`prop${id++}`} type={prop[1].type} defaultValue={prop[1].value} className={prop[0]} ></input>
          </div>
        </li>
        })
        document.getElementById("position").innerHTML = 'Position:\t(' + node.position.x + ', ' + node.position.y +')';
        this.forceUpdate();
      };
      
    }
    
    UpdateNode(){
      var id = document.getElementById("ID-input").value;
      var type = document.getElementById("type-input").value;

    
      var properties = {};
      console.log(this.properties)
      for(let i=0; i <  this.properties.length ; i++)
      {
        var prop = document.getElementById(`prop${i}`).value;
        var label = document.getElementById(`prop${i}`).className;
        var type = document.getElementById(`prop${i}`).type;
        properties[label] = {
          value: prop,
          type: type
        }
      }
      SetProperties(id, type, properties);
    }

    render () {
      var names = ['Jake', 'Jon', 'Thruster'];
      const chart = this.state
      const stateActions = mapValues(actions, (func) =>
        (...args) => this.setState(func(...args)))
  
       
      return (
        <PageContent>
          <Content>

          </Content>
          <Sidebar>
             
             <Message>
                <div>Type:  </div>
                <input id="type-input"></input>
                <br/>
                <div>ID: </div>
                <input id="ID-input"></input>
                <br/>
                <br/>
                <div id="position"></div>
                <div>Properties:</div>
                <ul>{ this.properties }</ul>
                <div>Ports:</div>
                <ul>{ this.portsList }</ul>
                {/*
                  We can re-use the onDeleteKey action. This will delete whatever is selected.
                  Otherwise, we have access to the state here so we can do whatever we want.
                */}
                <Button onClick={() => {this.UpdateNode()}}>Update</Button>
                <Button onClick={() => {Delete()}}>Delete</Button>
              </Message>
             <Message>Click on a Node, Port or Link</Message> 
             

          </Sidebar>
        </PageContent>
      )
    }
  }
  
export default SelectedSidebar;