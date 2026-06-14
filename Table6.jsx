import React from 'react';

function Table2() {
  const tableData = [
    {
      category: 'Basic Features',
      items: [
        { config: 'Rectangular Tube (Hot-Dip Galvanized)', description: 'L5850*W6300*H2480mm', },
        { config: 'Internal Dimensions (mm)', description: 'L5500*W6180*H2200mm', },
        { config: 'Folded State (mm)', description: 'L5850*W2200*H2480mm', },
      ],
    },
    {
      category: 'Frame Structure',
      items: [
        { config: 'Lifting Hooks', description: '8 lifting hooks of 160*210*160*5mm galvanized lifting hooks' },
        { config: 'Main Top', description: '80*120*2.5mm/120*120*2.5mm galvanized square tube' },
        { config: 'Main Bottom', description: '80*120*2.5mm galvanized square tube main frame, with 50*100*1.2mm secondary beams inside' },
        { config: 'Side Top', description: '40*80*1.5mm galvanized P-type tube' },
        { config: 'Side Bottom', description: '60*80*1.5mm/40*80*2.0mm galvanized square tube frame' },
        { config: 'Side Wall', description: '40*80*1.5mm galvanized P-type tube' },
        { config: 'Secondary Wall', description: '40*80*1.5mm galvanized P-type tube' },
        { config: 'Folding Hinge', description: '	3 mm welded hinge' },
        { config: 'Overall Frame Anti-corrosion Coating', description: 'Electrostatic spraying with straight white plastic powder' },
        
      ],
    },
    {
      category: 'Container Roof',
      items: [
        { config: 'External Roof Panel', description: '50 mm EPS board',},
        { config: 'Internal Corridor Ceiling', description: 'Bamboo fiber board',},
        
      ],
    },
    {
      category: 'Decoration',
      items: [
        { config: 'External Wall Metal Carving Board'},
        ],
    },
    {
      category: 'Wall Panel',
      items: [
        { config: 'Main Body', description: '50 mm EPS board', },
        { config: 'Side Roof Panel', description: '50 mm EPS board', },
        { config: 'Internal Partition', description: '50 mm EPS board', },],
    },
    {
      category: 'Floor',
      items: [
        { config: 'Middle Floor', description: '18 mm cement fiber board + 1.6 mm wood grain plastic', },
      { config: 'Side Floors', description: '18 mm bamboo plywood + 1.6 mmwood grainplastic', },
          
      ],
    },
    {
      category: 'Seam Connection',
      items: [
      { config: 'Aluminum Plate', description: '120 mm aluminumplate', },    
      ],
    },
    {
      category: 'Bathroom',
      items: [
        {description: 'Bamboo fiber board for walls and ceiling, titanium alloy glass door, sliding door for separationof dryandwetareas, 1 toilet, 1 cabinet washbasin, 1 shower', },
      ],
    },
    {
      category: 'Kitchen',
      items: [
        {description: '1 L-shaped cabinet, quartz stone countertop, stainless steel sink, 1 set of cold and hot water faucet',  },
       ],
       
    },
    {
      category: 'Electrical System',
      items: [
        { description: '6 LED ceiling lights, 5 five-hole sockets, 3 single switches, 3 three-hole sockets, 3 air conditioner sockets,132A residual current device, 2 2P circuit breakers, 1 set of distribution box, 1 set of industrial sockets',  },
        ],
    },
    {
      category: 'Entrance Door',
      items: [
        {  description: '1760*2160mm KFC-style door' },
       ],
    },
    {
      category: 'Windows',
      items: [
        { description: 'Six 930 mm x 930 mm insulating bridge external suspended windows; one 500 mm x 925 mm insulating bridge external suspended window',},
       ],
    }
  ];

  return (
    <div className=" p-4 md:p-8 font-sans">
      <div className="text-center mb-10">
          <p className="text-[15px] md:text-[20px] text-orange-500 font-bold uppercase tracking-widest mb-2 opacity-80">
          Feature Layout
        </p>
        
        {/* Main Title - Uses 'text-3xl md:text-4xl' as defined in VS Code editor */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-10">
          Configurations Built to Fit Your Needs        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          
          <thead className="bg-gray-100/80 sticky top-0 z-10">
            <tr>
              <th className="p-4 text-left font-bold uppercase   text-orange-500 text-[15px] md:text-[20px]">Category</th>
              <th className="p-4 text-left font-bold uppercase  text-orange-500  text-[15px] md:text-[20px]">Configuration</th>
              <th className="p-4 text-left font-bold uppercase  text-orange-500 text-[15px] md:text-[20px]">Configuration Description</th>
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