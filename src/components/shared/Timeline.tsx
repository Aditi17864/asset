type TimelineItem = {
  title: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
      {items.map((item, index) => (
        <div key={index} className="relative pb-8 grid grid-cols-[auto_1fr] gap-x-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary ring-8 ring-background">
            {item.icon || <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
