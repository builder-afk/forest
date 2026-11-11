import React from 'react';
import { useApp } from '../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border text-xs font-label-md font-bold transition-all animate-in fade-in slide-in-from-top-4 duration-200 pointer-events-auto ${
            toast.type === 'volt'
              ? 'bg-inverse-surface text-primary-container border-primary-container/40 shadow-[0_4px_24px_rgba(212,255,0,0.15)]'
              : toast.type === 'success'
              ? 'bg-inverse-surface text-white border-white/20'
              : 'bg-surface-container-lowest text-on-surface border-surface-container-high'
          }`}
        >
          <span className="material-symbols-outlined text-lg text-primary-container">
            {toast.type === 'volt' ? 'bolt' : 'info'}
          </span>
          <span className="flex-1 leading-snug">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

