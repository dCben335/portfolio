import { useEffect, useState } from 'react';

const useGridCalculation = (containerRef:  React.RefObject<HTMLElement>) => {
  const [gridColumnWidths, setGridColumnWidths] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateItemsPerLine = () => {
      if (!containerRef.current) return;

      const gridStyle = window.getComputedStyle(containerRef.current);
      const gridColumnValue = gridStyle.getPropertyValue('grid-template-columns');
      const firstColumnWidth = gridColumnValue.split(/\s+/)[0];

      setGridColumnWidths( parseInt(firstColumnWidth));
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === containerRef.current) return updateItemsPerLine();
      }
    });

    resizeObserver.observe(containerRef.current);
    updateItemsPerLine();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  
  return { gridColumnWidths };
};

export default useGridCalculation;
