import { MapPin, Building2, Clock, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { Job } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface JobDetailsModalProps {
  job: Job | null;
  open: boolean;
  onClose: () => void;
}

const JobDetailsModal = ({ job, open, onClose }: JobDetailsModalProps) => {
  const [applied, setApplied] = useState(false);

  const handleClose = () => {
    setApplied(false);
    onClose();
  };

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        {applied ? (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Application Submitted!</h2>
            <p className="text-muted-foreground max-w-xs">
              Your application for <span className="font-medium text-foreground">{job.title}</span> at {job.company} has been submitted successfully.
            </p>
            <Button onClick={handleClose} className="mt-2">
              Back to Jobs
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  {job.type}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Posted {job.postedDaysAgo} days ago
                </span>
              </div>
              <DialogTitle className="text-2xl">{job.title}</DialogTitle>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
              </div>
            </DialogHeader>

            <div className="space-y-5 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Job Description</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-tag text-tag-foreground font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button className="w-full h-11" onClick={() => setApplied(true)}>
                Apply Now
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
