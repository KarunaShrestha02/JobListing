import type { JobType } from "@/data/jobs";

const filters: Array<{ label: string; value: JobType | "All" }> = [
  { label: "All Jobs", value: "All" },
  { label: "Full-time", value: "Full-time" },
  { label: "Internship", value: "Internship" },
  { label: "Remote", value: "Remote" },
];

interface FilterTabsProps {
  active: JobType | "All";
  onChange: (value: JobType | "All") => void;
}

const FilterTabs = ({ active, onChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
            active === f.value
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:bg-muted border border-border"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
