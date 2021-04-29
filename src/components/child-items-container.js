import React, { useRef } from 'react';
import ChildItem from './child-item';

import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import { useBuilderState } from '../hooks/useBuilderState';

function handleAddChild(childItems, activeSection, setChildren, setEditing) {
  const updatedChildren = [...childItems];
  updatedChildren[activeSection].push({ id: `item-${uuidv4()}`, text: 'New Item' });
  updatedChildren.splice(activeSection, 1, updatedChildren[activeSection]);
  setChildren(updatedChildren);
  setEditing(false);
}

function handleUpdateSection(sections, activeSection, sectionTitleInput, setSections, setEditing) {
  const updatedSections = [...sections];
  updatedSections.splice(activeSection, 1, { title: sectionTitleInput.current.value });
  setSections(updatedSections);
  setEditing(false);
}

export default function ChildItemsContainer() {
  const { childItems, setChildren, sections, setSections, activeSection, isEditing, setEditing, displayType } = useBuilderState();
  const sectionTitleInput = useRef(null);
  const displayLeft = displayType === 'left';

  return (
    <section className={`oe-bg-white oe-h-full oe-px-6 oe-pb-6 oe-pt-2 oe-overflow-y-auto oe-flex oe-flex-col oe-mt-6 ${displayLeft ? 'oe-w-4/5' : 'oe-w-full'}`}>
      <div className="oe-container oe-flex oe-flex-row oe-items-center oe-w-full oe-mx-3">
        {isEditing ? (
          <>
            <input
              id="section-title"
              ref={sectionTitleInput}
              className="oe-text-gray-800 oe-text-3xl oe-p-1 oe-border-0 oe-rounded oe-bg-gray-200"
              defaultValue={sections[activeSection].title}
            />
            <button
              className="oe-p-2 oe-mx-2 oe-text-sm oe-text-tumo-teal hover:oe-underline focus:oe-outline-none focus-visible:oe-outline-black"
              onClick={() => handleUpdateSection(sections, activeSection, sectionTitleInput, setSections, setEditing)}
              title="save section name"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="oe-text-gray-800 oe-text-3xl oe-p-1">
              {sections[activeSection].title}
            </h2>
            <button
              className="oe-cursor-pointer oe-text-gray-800 oe-fill-current oe-py-1 focus:oe-outline-none focus-visible:oe-outline-black"
              onClick={() => setEditing(true)}
              title="edit section name"
            >
              <svg
                className="oe-my-auto oe-mx-1"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <Droppable droppableId="droppable-1" direction="horizontal">
        {provided => (
          <div className="oe-container oe-flex oe-flex-wrap oe-flex-row"
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {childItems[activeSection].map((childItem, index) => (
              <ChildItem
                key={childItem.id}
                index={index}
                childItem={childItem}
              ></ChildItem>
            ))}
            {provided.placeholder}
            <ChildItem
              childItem={{ text: 'Add an item' }}
              isAddItem
              onClick={() => handleAddChild(childItems, activeSection, setChildren, setEditing)}
            ></ChildItem>
          </div>
        )}

      </Droppable>
    </section>
  );
}
