import React from 'react';

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    
    this.getColumn = this.getColumn.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.addSearch = this.addSearch.bind(this);
    this.addSort = this.addSort.bind(this);
    this.sortTable = this.sortTable.bind(this);
    this.getColumn();
    this.getOrder();
  }

  getColumn() {
    /* 
     * 1. Use the REST API to get column names
     * 2. Create a table and append the columns to the table head
     */

  }
  
  getOrder() {
    /*
     * 1. Use the REST API to get the orders
     * 2. Append the rows to the table body same table that you created in getColumn() function
     * 3. Check the value inside <td> tags and set the color appropriatly. 
     */
  }

addSearch() {
  /*
   * 1. Create a seach box element in the 4th and 7th column.
   * 2. Call the search() function onkeyup and pass two parameters: search text and column index 
   */
  
}
addSort() {
/*
   * 1. Create a button which says Sort in the 1st column.
   * 2. Call the sort() function onclick
   */
}
search(heading, index) {
	/*
	 * Search and display only the rows which match the search text.
	 */
}
sortTable() {
  /*
   *  Sort the table for index N = 0 i.e. first column.
   */
}
  render() {
    return (
      <div>
        <h1>Blotter</h1>
        {this.addSearch()}
        {this.addSort()}
      </div>
    )
  }
}


export default MainApp;
