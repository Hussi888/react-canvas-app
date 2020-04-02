import { ADD_ELEMENT } from '../types';

const initialState = {
  elements: [
    {
      type: "output-only",
      ports: {
        port1: {
          id: "port1",
          type: "left",
          properties: {
            custom: "property",
            value: "yes"
          }
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            custom: "property",
            value: "yes"
          }
        }
      },
      properties: {
        name: {
          type: "text",
          value: "bosdrike"
        },
        number: {
          type: "number",
          value: 12366677
        }
      }
    },
    {
      type: "type1",
      ports: {
        port1: {
          id: "port1",
          type: "right",
          properties: {
            name: {
              type: "text",
              value: "chopaa"
            },
            number: {
              type: "number",
              value: 12323
            }
          }
        }
      },
      properties: {
        name: {
          type: "text",
          value: "damn"
        },
        number: {
          type: "number",
          value: 432
        }
      }
    },
    {
      type: "type2",
      ports: {
        port1: {
          id: "port1",
          type: "right",
          properties: {
            custom: "property",
            value: "yes"
          }
        }
      },
      properties: {
        name: {
          type: "text",
          value: "yppp"
        },
        number: {
          type: "number",
          value: 123
        }
      }
    },
    {
      type: "type3",
      ports: {
        port1: {
          id: "port1",
          type: "right",
          properties: {
            custom: "property",
            value: "yes"
          }
        }
      },
      properties: {
        name: {
          type: "text",
          value: "khottty"
        },
        number: {
          type: "number",
          value: 1444423
        }
      }
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      const newElements = initialState.elements;
      for (let element of action.payload)
        newElements.push(element);
      return {
        ...state,
        elements: newElements
      }
    default:
      return state;
  }
}
