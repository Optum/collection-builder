import React from 'react';
// import { Tooltip } from '@chakra-ui/react';
import { useBuilderState } from '../hooks/useBuilderState';

export default function AddSection({ onClick }) {
  const { displayType, textColor } = useBuilderState();

  const displayLeft = displayType === 'left';
  const addSectionStyle = displayLeft ? 'oe-rounded oe-m-1 oe-p-2' : 'oe-rounded-full oe-h-8 oe-p-1 oe-mt-1 oe-mx-3';
  const textStyle = textColor === 'dark' ? 'oe-text-gray-800' : 'oe-text-white';

  return (
    <button
      className={`oe-relative oe-font-medium oe-flex-row oe-flex oe-items-center oe-cursor-pointer oe-filter-bright oe-shadow oe-border-2 oe-border-white ` +
        `hover:oe-bg-primary ${addSectionStyle} ${textStyle} focus:oe-outline-none focus-visible:oe-bg-primary`}
      title="Add a section" onClick={onClick}
    >
      {/* <Tooltip label="Add a tab" placement="top" isDisabled={displayLeft}> */}
        <div style={{ whiteSpace: 'nowrap' }}>
          <div className="oe-flex oe-flex-row oe-items-center">
            <svg
              className="oe-h-6 oe-w-6 oe-fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            {displayLeft && <span className="oe-mx-2 oe-font-bold">Add a section</span>}
          </div>
        </div>
      {/* </Tooltip> */}
    </button>
  );
}
