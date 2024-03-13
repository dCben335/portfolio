import { useEffect, useState } from 'react';

const useGridCalculation = (containerRef:  React.RefObject<HTMLElement>) => {
  const [gridColumnWidths, setGridColumnWidths] = useState<number>(0);

  useEffect(() => {
    const updateItemsPerLine = () => {
      if (containerRef.current) {
        const gridStyle = window.getComputedStyle(containerRef.current);
        const gridColumnValue = gridStyle.getPropertyValue('grid-template-columns');
        const gridColumnValues = gridColumnValue.split(' ');
        
        const gridColumnWidths = gridColumnValues.map(value => {
            if (value.includes('minmax')) {
                const match = value.match(/minmax\(([^)]+)\)/);
                const minMaxValues = match ? match[1].split(',') : [];
                return parseInt(minMaxValues[0]);
            }
            return parseInt(value);
        });
        
        setGridColumnWidths(gridColumnWidths[0]);
      }
    };

    window.addEventListener('resize', updateItemsPerLine);
    updateItemsPerLine();

    return () => {
      window.removeEventListener('resize', updateItemsPerLine);
    };
  }, [containerRef]);

  
  return { gridColumnWidths };
};

export default useGridCalculation;
