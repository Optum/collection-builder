import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useBuilderState } from '../hooks/useBuilderState';
import Icon from './icon';

function handleDeleteChild(index, childItems, activeSection, setChildren) {
  const updatedChildren = [...childItems];
  updatedChildren[activeSection].splice(index, 1);
  setChildren(updatedChildren);
}

function handleUpdateChild(index, event, childItems, activeSection, setChildren, setEditing) {
  const updatedChildren = [...childItems];
  const newChild = { id: updatedChildren[activeSection][index].id, text: event.target.value };
  updatedChildren[activeSection].splice(index, 1, newChild);
  setChildren(updatedChildren);
  setEditing(false);
}

export default function ChildItem({ isAddItem, childItem, index, onClick }) {
  const { childItems, activeSection, textColor, icon, setChildren, setEditing } = useBuilderState();
  const textStyle = textColor === 'dark' ? 'oe-text-gray-800' : 'oe-text-white';

  return isAddItem ? (
    <div className="oe-w-full md:oe-w-1/2 lg:oe-w-1/3 2xl:oe-w-1/4 oe-p-3">
      <button
        className="oe-w-full oe-bg-white oe-rounded-lg oe-border oe-flex oe-flex-row oe-items-stretch oe-justify-between oe-cursor-pointer hover:oe-bg-gray-100 focus:oe-outline-none focus-visible:oe-outline-add-page"
        onClick={onClick}
      >
        <div className="oe-flex oe-flex-row oe-items-center oe-p-4">
          <div className="oe-flex oe-flex-row oe-items-center oe-h-16 oe-w-16 oe-bg-gray-500 oe-rounded-lg">
            <svg
                style={{ margin: 'auto' }}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
                width="40"
              >
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          <span className="oe-text-black oe-mx-4 oe-px-1">{childItem.text}</span>
        </div>
      </button>
    </div>
  ) :
    (
      <Draggable draggableId={childItem.id} index={index} title={`${childItem.text} item`}>
        {provided => (
          <div className="oe-w-full md:oe-w-1/2 lg:oe-w-1/3 2xl:oe-w-1/4 focus:oe-outline-black" 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <div
              className="oe-bg-white oe-p-4 oe-rounded-lg oe-border oe-flex oe-w-auto oe-flex-row oe-items-stretch oe-justify-between oe-m-3 oe-relative oe-cursor-move"
            >
              <button 
                className="oe-absolute oe-top-0 oe-right-0 oe-h-4 oe-w-4 oe-m-2 oe-cursor-pointer focus:oe-outline-black"
                onClick={() => handleDeleteChild(index, childItems, activeSection, setChildren)}
                title={`delete item ${childItem.text}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="oe-text-gray-700 oe-fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              <div className="oe-flex oe-flex-row oe-items-center">
                <div
                  className={`oe-flex oe-flex-row oe-items-center oe-h-16 oe-w-16 oe-bg-primary oe-rounded-lg`}
                >
                  <svg 
                    className={`${textStyle} oe-fill-current oe-m-auto`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    height="40"
                    width="40"
                  >
                    <Icon type={icon}/>
                  </svg>
                </div>
                <div className="oe-flex oe-flex-row oe-mr-2 oe-w-2/3">
                  <input
                    key={`${childItems[activeSection][index].text}-${activeSection}`}
                    className="oe-w-full oe-text-black oe-ml-4 oe-py-1 oe-px-2 oe-rounded oe-bg-gray-200 oe-border oe-border-gray-300"
                    defaultValue={childItem.text}
                    onBlur={event => handleUpdateChild(index, event, childItems, activeSection, setChildren, setEditing)}
                    title="edit item name"
                  />
                </div>
              </div>
            </div>
          </div>
          )
        }
      </Draggable>
      );
}
