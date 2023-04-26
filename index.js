const globalStyle = document.createElement("style");
globalStyle.innerText = `
* {
    font-family:  Arial, Helvetica, sans-serif;
}
table, td, th, tr {
    border: solid 1px black;
}
thead {
    font-weight: bold;
}
`;

const table1 = document.getElementById("table-1");
table1.insertHeaderRow(["Vorname", "Nachname"]);
table1.insertBodyRow(["Bob", "Ross"]);
table1.insertBodyRow(["Pablo", "Picasso"]);
table1.addStyle(globalStyle);

