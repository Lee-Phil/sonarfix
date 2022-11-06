import { Tab, Tabs, TabList } from "@chakra-ui/react";

export default function RequestTabs({ setStatus, setCurrPage }) {
  type CustomTab = {
    status: string;
    tabName: string;
  };
  const TAB_OPTIONS: Array<CustomTab> = [
    {
      status: "ALL_REQUESTS",
      tabName: "My Requests",
    },
    {
      status: "FILLED",
      tabName: "Filled Shifts",
    },
    {
      status: "UNFILLED",
      tabName: "Unfilled Shifts",
    },
    {
      status: "COMPLETED",
      tabName: "Completed",
    },
    {
      status: "CANCELLED",
      tabName: "Cancelled",
    },
  ];
  return (
    <>
      <Tabs isFitted>
        <TabList>
          {TAB_OPTIONS.map((tab, index) => {
            return (
              <Tab
                key={index}
                onClick={() => {
                  setStatus(tab.status);
                  setCurrPage(1);
                }}>
                <span className="request-tab"> {tab.tabName}</span>
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </>
  );
}
