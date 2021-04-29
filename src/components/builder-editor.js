import SectionBar from './section-bar';
import ChildItemsContainer from './child-items-container';
import React, {useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useBuilderState } from '../hooks/useBuilderState';
import { applyTheme } from '../theme/utils';

export default function BuilderEditor() {
  const { childItems, setChildren, activeSection, displayType, palette } = useBuilderState();

  const editorStyle = displayType === 'left' ? 'oe-flex-row' : 'oe-flex-col';

  useEffect(() => {
    applyTheme(palette);
  }, [palette]);

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const updatedChildren = [...childItems];
    const childCopy = { ...updatedChildren[activeSection][source.index] };
    updatedChildren[activeSection].splice(source.index, 1);
    updatedChildren[activeSection].splice(destination.index, 0, childCopy);

    setChildren(updatedChildren);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section
        className={`oe-flex oe-h-builder oe-w-full oe-rounded-md oe-shadow-lg oe-overflow-hidden oe-border oe-border-gray-200 ${editorStyle}`}
      >
        <SectionBar />
        <ChildItemsContainer />
      </section>
    </DragDropContext>
  );
}
