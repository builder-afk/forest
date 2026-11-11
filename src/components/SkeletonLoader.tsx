import React from 'react';

export const PageSkeleton: React.FC = () => (
  <div className="w-full pt-44 px-4 md:px-6 min-h-[80vh] animate-pulse space-y-8">
    <div className="w-full space-y-6">
      {/* Hero skeleton */}
      <div className="h-64 bg-surface-container rounded-2xl w-full" />
      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-80 bg-surface-container rounded-xl p-4 space-y-3">
            <div className="h-44 bg-surface-container-high rounded-lg" />
            <div className="h-4 bg-surface-container-high rounded w-3/4" />
            <div className="h-3 bg-surface-container-high rounded w-1/2" />
            <div className="h-8 bg-surface-container-high rounded mt-4" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-container p-4 space-y-3 animate-pulse">
    <div className="h-56 bg-surface-container rounded-lg" />
    <div className="h-3 bg-surface-container-high rounded w-1/4" />
    <div className="h-4 bg-surface-container-high rounded w-3/4" />
    <div className="h-3 bg-surface-container-high rounded w-1/2" />
    <div className="grid grid-cols-3 gap-1 pt-2">
      <div className="h-8 bg-surface-container rounded" />
      <div className="h-8 bg-surface-container rounded" />
      <div className="h-8 bg-surface-container rounded" />
    </div>
    <div className="flex justify-between items-center pt-2">
      <div className="h-6 bg-surface-container rounded w-16" />
      <div className="h-8 bg-surface-container rounded w-20" />
    </div>
  </div>
);

