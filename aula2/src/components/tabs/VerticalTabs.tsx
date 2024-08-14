import React, { useState, type ReactNode } from "react";

interface TabProps {
  title: string;
  children: ReactNode;
}

interface VerticalTabsProps {
  children: ReactNode[];
}

const VerticalTabs = ({ children }: VerticalTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle the case where children is a single React element
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className="flex">
      {/* Tabs Section */}
      <div className="w-1/4">
        {tabs.map((child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                key={index}
                className={`block w-full text-left p-4 ${
                  activeTab === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {child.props.title}
              </button>
            );
          }
          return null;
        })}
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-4 bg-white border-l">
        {tabs.map((child, index) => {
          if (React.isValidElement(child) && activeTab === index) {
            return <></>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

VerticalTabs.Tab = ({ title, children }: TabProps) => {
  return (
    <>
      <div
        key={children?.valueOf()}
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {/* {children.map((child, index) => {
        return <div key={index}>{child}</div>;
      })} */}
    </>
  ); // The content will be rendered by the parent `VerticalTabs` component
};

export default VerticalTabs;
