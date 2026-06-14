import React from 'react';

function Table2() {
  const tableData = [
    {
      category: 'Skeleton Structure',
      items: [
        { config: 'Rectangular Tube (Hot-Dip Galvanized)', description: 'Rectangular Tube (Hot-DipGalvanized)', quantity: '1 set' },
       ],
    },
    {
      category: 'Enclosure Structure',
      items: [
        { config: 'Aluminum Cladding', description: 'Aluminum, Electrostatic Spray Coating Process', quantity: '1 set' },
        ],
    },
    {
      category: 'Insulation Layer',
      items: [
        { config: 'Polyurethane', description: '', quantity: '1 set' },
       ],
    },
    {
      category: 'Doors and Windows Engineering',
      items: [
        { config: 'Entrance Door', description: 'Zinc-Magnesium Alloy Entrance Door with Enamel Process', quantity: '1 set' },
        { config: 'Entrance Door Lock', description: 'Smart Fingerprint Lock', quantity: '1 set' },
        { config: 'Bathroom Door', description: 'Minimalist Titanium Magnesium Alloy Glass Door', quantity: '1 set' },
        { config: 'Balcony Glass Railing', description: '10mm Tempered Glass (Clear)', quantity: '1 set' },
        { config: 'Glass', description: '6+15Ar+6Low-E Tempered Glass (Clear)', quantity: '1 set' },
        { config: 'Insulated Windows and Screens', description: '5+12Ar+5Low-E TemperedGlass (Clear)', quantity: '1 set' },
          
      ],
    },
    {
      category: 'Interior Wall System',
      items: [
        { config: 'Baseboard', description: 'OSB (Oriented Strand Board)', quantity: '1 set' },
        { config: 'Finish Board', description: 'Bamboo Fiber Board', quantity: '1 set' },
        { config: 'Bathroom Waterproof Baseboard', description: 'Co-extruded Board', quantity: '1 set' },
        { config: 'Bathroom Finish Board', description: 'Bamboo Fiber Board', quantity: '1 set' },
       
      ],
    },
    {
      category: 'Floor Structure',
      items: [
        { config: 'Living Room and Bedroom Floor Baseboard', description: 'Cement Fiber Board', quantity: '1 set' },
        { config: 'Living Room and Bedroom Floor Finish Board', description: 'Composite Wood Flooring', quantity: '1 set' },
       ],
    },
    {
      category: 'Ceiling Structure',
      items: [
        { config: 'Bedroom Ceiling Baseboard', description: 'OSB (Oriented Strand Board)', quantity: '1 set' },
        { config: 'Bedroom Ceiling Finish Board', description: 'Bamboo Fiber Board', quantity: '1 set' },
       ],
       
    },
    {
      category: 'Electrical Equipment Installation',
      items: [
        { config: 'Strong Electric System', description: '', quantity: '' },
        { config: 'Distribution Box', description: 'Distribution Box', quantity: '1 unit' },
        { config: 'Card Insertion Power System', description: 'Card Insertion Power System', quantity: '1 unit' },
        { config: 'Transformer', description: 'Transformer', quantity: '3 units' },
        { config: 'Switch', description: 'Switch', quantity: '4 units' },
        { config: 'Socket', description: 'Socket', quantity: '12 units' },
        { config: 'Wiring', description: 'Strong Electric Wiring', quantity: '-' },
        { config: 'Conduit', description: 'PVC', quantity: '-' },
        { config: 'Strong Electric Accessories', description: 'Including Junction Boxes, etc.', quantity: '1 set' },
        { config: 'Weak Electric System', description: 'Including Junction Boxes, etc.', quantity: '1 set' },
        { config: 'Weak Electric Distribution Box', description: 'Weak Electric Distribution Box', quantity: '1 unit' },
       ],
    },
    {
      category: 'Water Supply and Drainage Engineering',
      items: [
        { config: 'Water Supply System', description: '-', quantity: '-' },
        { config: 'Water Pipe', description: 'PPR φ20', quantity: '5 units' },
        { config: 'Drainage Pipe', description: 'PVC', quantity: '1 set' },
        { config: 'Floor Drain', description: 'Floor Drain', quantity: '2 units' },
       ],
    },
    {
      category: 'Lighting System',
      items: [
        { config: 'Internal Lighting', description: 'Internal Lighting', quantity: '1 set' },
        { config: 'Downlight', description: 'Downlight', quantity: '5 units' },
        { config: 'Wall Light', description: 'Wall Light', quantity: '1 unit' },
        { config: 'Light Strip', description: 'Light Strip', quantity: '130 meters' },
       ],
    },
    {
      category: 'Sanitary Fittings',
      items: [
        { config: 'Single Handle Basin Tap', description: 'Single Handle Basin Tap', quantity: '1 set' },
        { config: 'Single Handle Shower', description: 'Single Handle Shower', quantity: '1 set' },
        { config: 'Intelligent Toilet', description: 'Intelligent Toilet', quantity: '1 set' },
        { config: 'Rock Board Washbasin', description: 'Rock Board Washbasin', quantity: '1 set' },
        { config: 'Bath Heater', description: 'Bath Heater', quantity: '1 set' },

       ],
    },
    {
      category: 'Equipment Section',
      items: [
        { config: 'Custom Cabinets', description: 'Custom Cabinets', quantity: '1 set' },
        { config: 'Entrance Stairs', description: 'Entrance Stairs', quantity: '1 set' },
       
       ],
    },
  ];

  return (
    <div className="p-4 md:p-8 font-sans">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100/80 sticky top-0 z-10">
            <tr>
              <th className="p-4 text-left font-bold uppercase   text-orange-500 text-[15px] md:text-[20px]">Category</th>
              <th className="p-4 text-left font-bold uppercase  text-orange-500  text-[15px] md:text-[20px]">Configuration</th>
              <th className="p-4 text-left font-bold uppercase  text-orange-500 text-[15px] md:text-[20px]">Configuration Description</th>
              <th className="p-4 text-left font-bold uppercase  text-orange-500 text-[15px] md:text-[20px]">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((categoryGroup, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                {categoryGroup.items.map((item, itemIndex) => (
                  <tr key={`${categoryIndex}-${itemIndex}`} className="border-b border-[#ddd]">
                    {itemIndex === 0 && (
                      <td
                        rowSpan={categoryGroup.items.length}
                        className="p-4 font-bold align-top text-[15px] md:text-[20px]"
                      >{categoryGroup.category}
                      </td>
                    )}
                    <td className="p-4 text-[15px] md:text-[20px]">{item.config}</td>
                    <td className="p-4 text-[15px] md:text-[20px]">{item.description}</td>
                    <td className="p-4 text-[15px] md:text-[20px]">{item.quantity}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table2;