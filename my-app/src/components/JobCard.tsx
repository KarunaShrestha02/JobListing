import { MapPin, Building2, Clock } from "lucide-react";
import type { Job } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const typeColors: Record<string, string> = {
  "Full-time": "bg-primary/10 text-primary border-primary/20",
  Internship: "bg-accent/10 text-accent border-accent/20",
  Remote: "bg-tag text-tag-foreground border-tag-foreground/20",
  "Part-time": "bg-muted text-muted-foreground border-border",
};

interface JobCardProps {
  job: Job;
  onSelect: (job: Job) => void;
}

const JobCard = ({ job, onSelect }: JobCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 cursor-pointer"
      onClick={() => onSelect(job)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className={`text-xs font-medium ${typeColors[job.type] || ""}`}>
              {job.type}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {job.postedDaysAgo}d ago
            </span>
          </div>
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors truncate">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5" />
              {job.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="text-xs px-2 py-0.5 rounded-md bg-tag text-tag-foreground font-medium">
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                +{job.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        <Button size="sm" variant="outline" className="shrink-0 hidden sm:inline-flex group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
          onClick={(e) => { e.stopPropagation(); onSelect(job); }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
