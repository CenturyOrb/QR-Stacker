import Handsontable from 'handsontable/base';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

const Table = ({ data }) => {		
	const items = [
  		{
  		  	date_in: "2026-02-28",
  		  	vendor: "Samsung",
  		  	type: "Phone",
  		  	series: "Galaxy S",
  		  	code: 2491,
  		  	item_name: "Samsung Galaxy S24",
  		  	cost: 620,
  		  	price: 799,
  		  	status: "in_stock",
  		  	date_sell: null,
  		  	note: "New shipment"
  		},
  		{
  		  	date_in: "2026-02-20",
  		  	vendor: "Apple",
  		  	type: "Laptop",
  		  	series: "MacBook Air",
  		  	code: 13,
  		  	item_name: "MacBook Air M3 13-inch",
  		  	cost: 950,
  		  	price: 1199,
  		  	status: "sold",
  		  	date_sell: "2026-03-01",
  		  	note: "Customer preorder"
  		},
  		{
			date_in: "2026-03-03",
  		  	vendor: "Sony",
  		  	type: "Camera",
  		  	series: "Alpha",
  		  	code: 17,
  		  	item_name: "Sony A7 IV Mirrorless Camera",
  		  	cost: 1800,
  		  	price: 2199,
  		  	status: "in_stock",
  		  	date_sell: null,
  		  	note: "Body only"
  		},
  		{
  		  	date_in: "2026-03-05",
  		  	vendor: "Logitech",
  		  	type: "Accessory",
  		  	series: "MX",
  		  	code: 4891,
  		  	item_name: "Logitech MX Master 3S Mouse",
  		  	cost: 70,
  		  	price: 99,
  		  	status: "reserved",
  		  	date_sell: null,
  		  	note: "Reserved for corporate order"
  		}
	];
	
	return(
		<HotTable
			data={items}
			colHeaders={['date_in', 'vendor', 'type', 'series', 'code', 'item_name', 'cost', 'price', 'status', 'date_sell', 'note']}
			columns={[
				{ 
    				data: 'date_in', 
    				type: 'date', 
    				dateFormat: 'YYYY-MM-DD', 
    				correctFormat: true,
    				defaultDate: new Date().toISOString().split('T')[0]
  				},
				{ data: 'vendor', type: 'text' },
  				{ data: 'type', type: 'text' },
  				{ data: 'series', type: 'text' },
  				{ data: 'code', type: 'numeric' },
  				{ data: 'item_name', type: 'text' },
				{ 
  				  data: 'cost', 
  				  type: 'numeric', 
  				  numericFormat: { pattern: '$0,0.00', culture: 'en-US' } 
  				},
  				{ 
  				  data: 'price', 
  				  type: 'numeric', 
  				  numericFormat: { pattern: '$0,0.00', culture: 'en-US' } 
  				},
  				{ 
  				  data: 'status', 
  				  type: 'dropdown', 
  				  source: ['available', 'sold', 'reserved'],
  				  strict: true 
  				},
  				{ 
  				  data: 'date_sell', 
  				  type: 'date', 
  				  dateFormat: 'YYYY-MM-DD', 
  				  correctFormat: true 
  				},
  				{ data: 'note', type: 'text' }
			]}
			rowHeaders={true}
			headerClassName="htLeft"
			afterChange={(changes, source) => {
				console.log(changes);
    			changes?.forEach(([row, prop, oldValue, newValue]) => {
    			});
  			}}
			
			licenseKey="non-commercial-and-evaluation"
		/>
	);
}

export default Table;
