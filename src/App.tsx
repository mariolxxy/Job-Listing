import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateX",
    location: "Lagos",
    salary: "₦600,000",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "₦350,000",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Big Data Inc.",
    location: "Abuja",
    salary: "₦500,000",
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppMasters",
    location: "Lagos",
    salary: "₦450,000",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Port Harcourt",
    salary: "₦550,000",
  },
  {
    id: 8,
    title: "Software Engineer",
    company: "CodeWorks",
    location: "Enugu",
    salary: "₦480,000",
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Abuja",
    salary: "₦530,000",
  },
  {
    id: 10,
    title: "IT Support Specialist",
    company: "Tech Assist",
    location: "Ibadan",
    salary: "₦250,000",
  },
];

interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const JobCard: React.FC<{ job: JobProps }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        width: "50%",
        border: "1px solid #ddd",
        padding: "16px 400px 16px 16px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "2%",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>{job.title}</h2>
      <p style={{ color: "#555" }}>
        {job.company} - {job.location}
      </p>
      <button
        style={{
          marginTop: "8px",
          backgroundColor: "#00008B",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <p style={{ marginTop: "8px", color: "#333" }}>Salary: {job.salary}</p>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "5%",
        }}
      >
        Welcome to Teems Joblisting
      </h1>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "light",
          margin: "5%",
        }}
      >
        Here you can find the best paying job with the best working Environment
      </p>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;
