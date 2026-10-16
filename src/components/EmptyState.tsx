import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="empty" role="status">
      <SearchX size={40} aria-hidden="true" className="empty__icon" />
      <h3 className="empty__title">No products found</h3>
      <p className="empty__text">Try adjusting your search or filters.</p>
      <button type="button" className="btn" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}
