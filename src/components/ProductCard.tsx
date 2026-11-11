import React, { memo } from 'react';
import { Product } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  isSaved: boolean;
  onNavigate: (slug: string) => void;
  onToggleSave: (id: string) => void;
  onOpenDrawer: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = memo(
  ({
    product,
    isSaved,
    onNavigate,
    onToggleSave,
    onOpenDrawer,
    onAddToCart,
    priority = false
  }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden transition-all duration-200 flex flex-col border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] group hover:bg-[#FAF7F2]">
        {/* Card Image Stage: Beige Canvas with 2px Bottom Border */}
        <div className="relative bg-[#F4F0EA] h-64 p-0 flex items-center justify-center overflow-hidden border-b-2 border-black">
          {/* Badge: Yellow or Red Brutal Tag */}
          <span className="absolute top-3 left-3 bg-[#FFE600] text-black font-label-caps text-[10px] px-2.5 py-1 border border-black font-black z-10 rounded-lg shadow-[1.5px_1.5px_0px_#000]">
            {product.badge || 'CFM PROTOCOL'}
          </span>

          {/* Save Favorite Button */}
          <button
            onClick={() => onToggleSave(product.id)}
            className={`absolute top-3 right-3 p-1.5 border border-black transition-all z-10 cursor-pointer rounded-xl shadow-[1.5px_1.5px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${
              isSaved
                ? 'bg-[#E63946] text-white'
                : 'bg-white hover:bg-[#FFE600] text-black'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save formulation'}
            aria-label="Save formulation"
          >
            <span
              className={`material-symbols-outlined text-lg ${
                isSaved ? 'material-symbols-fill' : ''
              }`}
            >
              favorite
            </span>
          </button>

          <OptimizedImage
            src={product.image}
            alt={product.name}
            targetWidth={420}
            priority={priority}
            className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
            onClick={() => onNavigate(product.slug)}
          />

          {/* Bottom Bar: Black Strip with Yellow Accent */}
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-label-caps bg-black text-white px-2.5 py-1 border border-black rounded-lg shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => onOpenDrawer(product)}
              className="hover:text-[#FFE600] transition-colors flex items-center gap-1 font-black cursor-pointer"
            >
              <span className="material-symbols-outlined text-xs">tune</span>
              <span>{product.flavors.length} FLAVORS</span>
            </button>
            <span className="text-[#FFE600] font-mono font-bold">{product.coaBatchNumber}</span>
          </div>
        </div>

        {/* Card Information */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Rating */}
            <div className="flex items-center gap-1 text-xs mb-1">
              <span className="material-symbols-outlined text-sm text-[#FFE600] material-symbols-fill">
                star
              </span>
              <span className="font-black text-black">{product.rating}</span>
              <span className="text-neutral-500 font-semibold">({product.reviewCount})</span>
            </div>

            {/* Title */}
            <h3
              onClick={() => onNavigate(product.slug)}
              className="font-headline-sm text-base font-black uppercase text-black hover:text-[#0038FF] transition-colors cursor-pointer leading-tight tracking-tight line-clamp-2"
            >
              {product.name}
            </h3>
            <p className="font-body-sm text-xs text-neutral-600 line-clamp-1 mt-1 font-medium">
              {product.subtitle}
            </p>
          </div>

          {/* Macro Grid: Brutalist Beige Boxes with Black Borders */}
          <div className="grid grid-cols-3 gap-1 py-1.5 px-1.5 bg-[#F4F0EA] border border-black rounded-xl text-center text-xs font-label-caps">
            <div className="border-r border-black/20 pr-1">
              <span className="text-neutral-600 block text-[9px] font-bold">PROTEIN</span>
              <span className="font-black text-black text-xs">{product.macros.protein}</span>
            </div>
            <div className="border-r border-black/20 pr-1">
              <span className="text-neutral-600 block text-[9px] font-bold">SUGAR</span>
              <span className="font-black text-black text-xs">{product.macros.sugar}</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-[9px] font-bold">CALORIES</span>
              <span className="font-black text-black text-xs">{product.macros.calories}</span>
            </div>
          </div>

          {/* Pricing & CTAs */}
          <div className="flex items-center justify-between pt-2.5 border-t-2 border-black/10">
            <div>
              <span className="font-numeric-stat text-xl font-black text-black leading-none block">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="block text-[10px] text-[#0038FF] font-label-caps font-black mt-0.5">
                SUB: ₹{product.subscriptionPrice ? product.subscriptionPrice.toLocaleString('en-IN') : Math.round(product.price * 0.85).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => onOpenDrawer(product)}
                className="px-2.5 py-1.5 bg-white hover:bg-[#F4F0EA] border border-black text-black font-label-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 rounded-xl shadow-[1.5px_1.5px_0px_#000]"
                title="Customize Flavor & Size"
              >
                <span className="material-symbols-outlined text-sm">tune</span>
                <span className="hidden sm:inline">SPEC</span>
              </button>
              <button
                onClick={() => onAddToCart(product)}
                className="px-3.5 py-1.5 bg-[#FFE600] hover:bg-[#FFDD00] text-black border-2 border-black font-label-md text-xs font-black uppercase tracking-wider transition-all rounded-xl shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = 'ProductCard';
