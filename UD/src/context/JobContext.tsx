import React, { createContext, useContext, useState } from "react";

type Job = {
  title: string;
  description: string;
};

type JobContextType = {
  jobs: Job[];
  addJob: (job: Job) => void;
  deleteJob: (index: number) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const addJob = (job: Job) => setJobs((prev) => [...prev, job]);

  const deleteJob = (index: number) => {
    setJobs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobContext must be used inside JobProvider");
  return context;
};
