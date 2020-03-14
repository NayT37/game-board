function getTableObj() {
    let tableObj = [];
    let tempObj = {};

    const table = document.querySelector('.data-table');
    for (let i = 0, totaRows = table.rows.length; i < totaRows; i++) {
        for (let j = 0, totalCells = table.rows[i].cells.length; j < totalCells; j++) {
            let tempHeader = table.rows[0].cells[j].innerHTML;
            let tempValue = table.rows[i].cells[j].innerHTML;
            if (i != 0) {
                tempObj = Object.assign(tempObj, { [`${tempHeader}`]: tempValue });
                if (j == totalCells - 1) {
                    tableObj.push(tempObj);
                    tempObj = {};
                }
            }
        }
    }
    console.log(tableObj);
    return tableObj;
}

console.log(JSON.stringify(getTableObj()));