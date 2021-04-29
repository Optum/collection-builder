import React, { useState } from 'react';
import BuilderContext from './builder-context';
import { displayTypes, textColors, icons } from '../utils/options';

export const validateSectionsAndChildItems = (sections, childItems) => {
  if (childItems) {
    if(childItems.length != sections.length){
      console.error(`Error: Invalid sections and childItems were found while validating options.`)
      return false;
    }
  }
  else {
    if(sections){
      console.error(`Error: Invalid sections and childItems were found while validating options.`)
    }
    return false;
  }
  return true;
}

export const validateOption = (type, option, optionList) => {
  if(!optionList.includes(option)){
    if (option) {
      console.error(`Error: An invalid ${type} was found while validating options.`);
    }
    return false;
  }
  return true;
}

export const BuilderProvider = ({ children, ...options }) => {

  const areValidSectionsAndChildItems = validateSectionsAndChildItems(options.sections, options.childItems);
  const defaults = { 
    sections: areValidSectionsAndChildItems ? options.sections : [{ title : 'New Section' }], 
    childItems: areValidSectionsAndChildItems ? options.childItems : [[]], 
    palette: options.palette || '#009688',
    textColor: validateOption('textColor', options.textColor, textColors) ? options.textColor : 'light',
    displayType: validateOption('displayType', options.displayType, displayTypes) ? options.displayType : 'top',
    icon: validateOption('icon', options.icon, icons) ? options.icon : 'leaf'
  }

  const [sections, setSections] = useState(defaults.sections);
  const [childItems, setChildren] = useState(defaults.childItems);
  const [palette, setSiteStyle] = useState(defaults.palette);
  const [textColor, setTextColor] = useState(defaults.textColor);
  const [displayType, setDisplayType] = useState(defaults.displayType);
  const [icon, setIcon] = useState(defaults.icon);
  const [activeSection, setActiveSection] = useState(0);
  const [isEditing, setEditing] = useState(false);

  const resetStates = () => {
    setSections(defaults.sections);
    setChildren(defaults.childItems);
    setSiteStyle(defaults.palette);
    setTextColor(defaults.textColor);
    setDisplayType(defaults.displayType);
    setIcon(defaults.icon);
    setActiveSection(0);
    setEditing(false);
  };

  const state = {
    sections,
    childItems,
    palette,
    textColor,
    displayType,
    icon,
    activeSection,
    isEditing,
    setSections,
    setChildren,
    setSiteStyle,
    setTextColor,
    setDisplayType,
    setIcon,
    setActiveSection,
    setEditing,
    resetStates: () => resetStates
  };

  return (
    <BuilderContext.Provider value={state}>
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;
