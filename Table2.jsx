import React from 'react';

function Table2() {
  const tableData = [
    {
      category: 'Structural System',
      items: [
        { config: 'Structural System', description: 'Aluminum and wood structure system', quantity: '1 set' },
        { config: 'Exterior Cladding', description: 'Aluminum single plate', quantity: '1 set' },
        { config: 'Glass', description: 'Double-glazed Low-e tempered glass', quantity: '1 set' },
        { config: 'Base Structure', description: 'Hot-dip Galvanized Rectangular Steel Tube Structure', quantity: '1 set' },
        { config: 'Insulation', description: 'Fire-resistant and flame-retardant insulation layer', quantity: '1 set' },
        { config: 'Interior Panels', description: 'Solid wood interior panels', quantity: '1 set' },
        { config: 'Entrance Door', description: 'Aluminum door with hotel card lock', quantity: '1 set' },
        { config: 'Support Pillar', description: 'Support pillar', quantity: '4 set' }
      ],
    },
    {
      category: 'Interior Decoration',
      items: [
        { config: 'Interior Cladding', description: 'Solid wood wood grain panels', quantity: '1 set' },
        { config: 'Flooring', description: 'OSB / moisture-proof layer / wood grain waterproof floor', quantity: '1 set' },
        { config: 'Lighting', description: 'Rustic wood-style interior lights', quantity: '1 set' },
        { config: 'Electrical Switches', description: 'Switch panels', quantity: '1 set' },
        { config: 'Ventilation', description: 'Triangular skylights', quantity: '2 pieces' },
        { config: 'Curtains', description: 'Surrounding aluminum alloy track / fabric curtains', quantity: '1 set' },
      ],
    },
    {
      category: 'Bathroom Module',
      items: [
        { config: 'Functional Zoning', description: 'Partition walls between bedroom and bathroom', quantity: '1 set' },
        { config: 'Bathing', description: 'Bathtub or shower / shower head', quantity: '1 set' },
        { config: 'Sanitary Ware', description: 'Toilet', quantity: '1 set' },
        { config: 'Sanitary Ware', description: 'Anti-odor floor drain', quantity: '1 set' },
        { config: 'Sanitary Ware', description: 'Smart mirror / rustic wood-style washbasin / faucet', quantity: '1 set' },
        { config: 'Bathroom Platform', description: 'Quartz platform', quantity: '1 set' },
        { config: 'Bathroom Accessories', description: 'Bathroom heater / lighting', quantity: '1 set' },
        { config: 'Bathroom Accessories', description: 'Sliding door', quantity: '1 set' },
      ],
    },
    {
      category: 'Electrical Distribution',
      items: [
        { config: 'Distribution Box', description: 'Distribution box', quantity: '1 set' },
      ],
    },
    {
      category: 'Water Pipe',
      items: [
        { config: 'Water Supply and Drainage Pipes', description: 'Internal water supply and drainage', quantity: '1 set' },
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