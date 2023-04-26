class Table extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const table = document.createElement("table");
        const div = document.createElement("div");
        this.header = table.createTHead();
        this.body = table.createTBody();
        div.appendChild(table);

        shadow.appendChild(div);
    }

    insertHeaderRow(columnNames) {
        const row = this.header.insertRow(-1);
        this.insertCells(row, columnNames);
    }

    insertBodyRow(cellContent) {
        const row = this.body.insertRow(-1);
        this.insertCells(row, cellContent);
    }

    insertCells(row, content) {
        content.forEach(c => {
            const cell = row.insertCell(-1);
            cell.innerText = c;
        });
    }

    deleteAllBodyRows() {
        this.body.innerHTML = "";
    }

    addStyle(style) {
        this.shadowRoot.appendChild(style);
    }
}

customElements.define("wc-table", Table);
