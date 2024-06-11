import React from 'react';

const Tabs = ({ tabs }) => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              id={`nav-${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#nav-${tab.id}`}
              type="button"
              role="tab"
              aria-controls={`nav-${tab.id}`}
              aria-selected={index === 0 ? 'true' : 'false'}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
            id={`nav-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`nav-${tab.id}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
