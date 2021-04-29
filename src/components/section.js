import React from 'react';
import { useBuilderState } from '../hooks/useBuilderState';

export default function Section({ sectionItem, onClick, sectionClicked }) {
  const { childItems, setChildren, sections, setSections, activeSection, setActiveSection, displayType, textColor } = useBuilderState();

  const active = sectionClicked === activeSection;
  const displayLeft = displayType === 'left';
  const textStyle = textColor === 'dark' ? 'oe-text-gray-800' : 'oe-text-white';

  const sectionStyle = active ?
    'oe-text-gray-800 oe-bg-white oe-z-30 ' +
    (displayLeft ? 'oe-rounded oe-m-1' : 'oe-active-tab oe-rounded-t-lg') :
    `oe-filter-bright focus-within:oe-bg-primary ${textStyle} hover:oe-bg-primary` +
    (displayLeft ? ' oe-rounded oe-m-1' : ' oe-inactive-tab oe-rounded-t-lg');
  const exitButtonHover = active ? 'hover:oe-bg-white focus:oe-outline-none focus-visible:oe-outline-black' : `hover:oe-bg-primary focus:oe-outline-none focus-visible:oe-outline-white` ;

  const handleDeleteSection = () => {
    if (sections.length === 1) {
      setSections([{ title: 'New Section' }]);
      setChildren([[]]);
    } else {
      const updatedSections = [...sections];
      const updatedChildren = [...childItems];
      updatedSections.splice(sectionClicked, 1);
      setSections(updatedSections);
      updatedChildren.splice(sectionClicked, 1);
      setChildren(updatedChildren);
    }

    if (activeSection === sectionClicked) {
      setActiveSection(sectionClicked === 0 ? 0 : sectionClicked - 1);
    } else if (activeSection === sections.length - 1) {
      setActiveSection(sections.length - 2);
    } else if (activeSection > sectionClicked) {
      setActiveSection(activeSection - 1);
    }
  };

  return (
    <section
      className={`oe-relative oe-font-medium oe-flex-row oe-flex oe-items-center oe-cursor-default ${sectionStyle}`}
    >
      <button
        className={`oe-py-2 oe-pl-4 oe-pr-10 oe-truncate oe-w-full nowrap oe-border-2 oe-rounded oe-border-transparent focus:oe-outline-none ${active ? 'focus-visible:oe-outline-white' : null}`}
        onClick={onClick}
        title={sectionItem.title}
      >
        <div className="oe-flex oe-flex-row oe-items-center">
          <span>
          {sectionItem.title}
          </span>
        </div>
      </button>
      <button
        className={`text-left oe-h-4 oe-w-4 oe-mx-3 oe-cursor-pointer oe-rounded-full oe-border-2 oe-border-transparent oe-absolute oe-right-0 oe-filter-dark ${exitButtonHover}`}
        onClick={handleDeleteSection}
        title={`delete section ${sectionItem.title}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${active ? 'oe-text-gray-700' : textStyle} oe-fill-current`}
          viewBox="0 0 24 24"
          
        >
          <path d="M0 0h24v24H0z" fill="none"/>
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </section>
  );
}
