/**
 * Real User Monitoring (RUM) Core Web Vitals Reporter
 * Uses native browser PerformanceObserver API without heavy third-party dependencies.
 */

export interface Metric {
  name: 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

function getRating(name: Metric['name'], value: number): Metric['rating'] {
  switch (name) {
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
  }
}

export function initWebVitals(onReport?: (metric: Metric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const report = (name: Metric['name'], value: number) => {
    const metric: Metric = {
      name,
      value: Math.round(value * 100) / 100,
      rating: getRating(name, value)
    };

    if (onReport) {
      onReport(metric);
    } else if (import.meta.env.DEV) {
      const color =
        metric.rating === 'good' ? '#536600' : metric.rating === 'needs-improvement' ? '#ff5722' : '#ba1a1a';
      console.log(`%c[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`, `color: ${color}; font-weight: bold;`);
    }
  };

  // 1. TTFB (Navigation Timing)
  try {
    const [navEntry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navEntry) {
      report('TTFB', navEntry.responseStart);
    }
  } catch (_) {}

  // 2. FCP
  try {
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          report('FCP', entry.startTime);
          paintObserver.disconnect();
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });
  } catch (_) {}

  // 3. LCP
  try {
    let lastLcp = 0;
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        lastLcp = entries[entries.length - 1].startTime;
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // Report LCP on page hide / visibility change
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (lastLcp > 0) report('LCP', lastLcp);
        lcpObserver.disconnect();
        window.removeEventListener('visibilitychange', onVisibilityChange);
      }
    };
    window.addEventListener('visibilitychange', onVisibilityChange);
  } catch (_) {}

  // 4. CLS
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        report('CLS', clsValue);
        clsObserver.disconnect();
      }
    }, { once: true });
  } catch (_) {}
}
