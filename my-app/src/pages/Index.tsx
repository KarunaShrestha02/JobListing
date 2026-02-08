import { useState, useMemo } from "react";
import { Briefcase } from "lucide-react";
import { jobs, type Job, type JobType } from "@/data/jobs";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import JobCard from "@/components/JobCard";
import JobDetailsModal from "@/components/JobDetailsModal";

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<JobType | "All">("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return jobs.filter((job) => {
      const matchesFilter = filter === "All" || job.type === filter;
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">JobBoard</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="container max-w-4xl mx-auto px-4 pt-10 pb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Available Jobs
        </h2>
        <p className="text-muted-foreground mb-6">
          Discover {jobs.length} opportunities waiting for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <SearchBar value={search} onChange={setSearch} />
          <FilterTabs active={filter} onChange={setFilter} />
        </div>
      </section>

      {/* Job List */}
      <main className="container max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((job) => (
              <JobCard key={job.id} job={job} onSelect={setSelectedJob} />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
              <button
                onClick={() => { setSearch(""); setFilter("All"); }}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        open={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
};

export default Index;
