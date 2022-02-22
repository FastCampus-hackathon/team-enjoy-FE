import { createContext, useState } from "react";

export const SelectedJob = createContext({
  selectedJob: [],
  setSelectedJob: () => {},
});

function CompareJob({ children }) {
  const [selectedJob, setSelectedJob] = useState([]);

  return (
    <SelectedJob.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </SelectedJob.Provider>
  );
}

export default CompareJob;
