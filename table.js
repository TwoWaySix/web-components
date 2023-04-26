class Table extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const table = document.createElement('table');

        this.div = document.createElement("div");
        this.header = table.createTHead();
        this.body = table.createTBody();

        this.div.appendChild(table);
        shadow.appendChild(this.div);

        const style = document.createElement("style");
        style.innerText = `
        table, td, th, tr {
            border: solid 1px black;
        }
        thead {
            font-weight: bold;
        }
        `;
        shadow.appendChild(style);
    }

    insertHeaderRow(columnNames) {
        const row = this.header.insertRow(-1);
        columnNames.forEach(name => {
            const cell = row.insertCell(-1);
            cell.innerText = name;
        });
    }

    insertBodyRow(cellContents) {
        const row = this.body.insertRow(-1);
        cellContents.forEach(name => {
            const cell = row.insertCell(-1);
            cell.innerText = name;
        });
    }
}

customElements.define('wc-table', Table);
