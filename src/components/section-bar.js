import React from 'react';
import Section from './section';
import { useBuilderState } from '../hooks/useBuilderState';
import AddSection from './add-section';

function handleAddSection(sections, childItems, setSections, setChildren, setActiveSection, setEditing) {
  const updatedSections = [...sections, { title: 'New Section' }];
  setSections(updatedSections);
  const updatedChildren = [...childItems, []];
  setChildren(updatedChildren);
  setActiveSection(sections.length);
  setEditing(false);
}

function handleSwitchSection(index, setActiveSection, setEditing) {
  setActiveSection(index);
  setEditing(false);
}

export default function SectionBar() {
  const { childItems, setChildren, sections, setSections, setActiveSection, setEditing, displayType } = useBuilderState();
  const displayLeft = displayType === 'left';
  const sectionBarStyle = displayLeft ?
    'oe-flex-col oe-w-1/5 oe-overflow-y-auto oe-overflow-x-hidden' :
    'oe-flex-row oe-overflow-x-auto oe-overflow-y-hidden oe-h-14';

  return (
    <section
      className={`oe-flex oe-px-2 oe-pt-2 ${sectionBarStyle} oe-bg-primary`}
    >
      {sections.map((sectionItem, index) => (
        <Section
          key={`section-${index}`}
          sectionItem={sectionItem}
          id={`section-${index}`}
          onClick={() => handleSwitchSection(index, setActiveSection, setEditing)}
          sectionClicked={index}
        />
      ))}
      <AddSection
        onClick={() => handleAddSection(sections, childItems, setSections, setChildren, setActiveSection, setEditing)}
      />
    </section>
  );
}
