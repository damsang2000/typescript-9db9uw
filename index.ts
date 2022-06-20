import * as WjGrid from '@grapecity/wijmo.grid';
import * as WjGridFilter from '@grapecity/wijmo.grid.filter';
import '@grapecity/wijmo.styles/wijmo.css';
import './style.css';

var countries = ['VietNam', 'Malaysia', 'US-UK', 'Korean'];

let data = countries.map((item, i) => {
  return {
    id: i,
    country: item,
    active: i % 2 != 0,
  };
});

let grid = new WjGrid.FlexGrid('#grid', {
  itemsSource: data,
});

let gridFilter = new WjGridFilter.FlexGridFilter(grid);
