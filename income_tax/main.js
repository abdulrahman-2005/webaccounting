const incomeInputEL = document.getElementById("income");
const outputDivEl = document.getElementById("output");

const taxP1 = [
	{
		limit: 15000,
		tax: 0,
	},
	{
		limit: 15000,
		tax: 0.025,
	},
	{
		limit: 15000,
		tax: 0.1,
	},
	{
		limit: 15000,
		tax: 0.15,
	},
	{
		limit: 140000,
		tax: 0.2,
	},
	{
		limit: 200000,
		tax: 0.225,
	},
	{
		limit: false,
		tax: 0.25,
	},
];

const taxP2 = [
	{
		limit: 60000,
		tax: 0.15,
	},
	{
		limit: 140000,
		tax: 0.2,
	},
	{
		limit: 200000,
		tax: 0.225,
	},
	{
		limit: false,
		tax: 0.25,
	}
];
const taxP3 = [
	{
		limit: 200000,
		tax: 0.2,
	},
	{
		limit: 200000,
		tax: 0.225,
	},
	{
		limit: 600000,
		tax: 0.25,
	}
];
const taxP4 = [
	{
		limit: 400000,
		tax: .225,
	},
	{
		limit: false,
		tax: 0.25,
	},
];


function taxEl(rowNumber, incomeValue, taxPercent, taxValue, total) {
    let cls = rowNumber === "Total" ? "total" : ""
	return `
    <tr class="${cls}">
    <th scope="row">${rowNumber}</th>
    <td>${incomeValue}</td>
    <td>${taxPercent}</td>
    <td>${taxValue}</td>
    <td>${total}</td>
    </tr>`;
}

function calcTax() {
    let taxesList = [];
	let incomeValue = incomeInputEL.value;
    let tempIncomeValue = incomeValue
    
    let taxPercentages;
    if (incomeValue <= 800010) {
        taxPercentages = taxP1
    } else if (incomeValue <= 900010) {
        taxPercentages = taxP2
    } else if (taxPercentages <= 1000010) {
        taxPercentages = taxP3
    } else {
        taxPercentages = taxP4
    } 

	for (temp of taxPercentages) {
        let taxPercent = temp["tax"];
		let taxLimit = temp["limit"];
		if (!taxLimit) {
            taxesList.push(tempIncomeValue);
			break;
		}
		if (tempIncomeValue > taxLimit) {
			taxesList.push(taxLimit);
			tempIncomeValue -= taxLimit;
		} else {
			taxesList.push(tempIncomeValue);
			break;
		}
	}

	outputDivEl.innerHTML = "";
    let totalTaxes = 0
	for (let indx = 0; indx < taxesList.length; indx++) {
        let layer = taxesList[indx]
        let taxPercent = taxPercentages[indx].tax
        let taxValue = taxPercent * layer
        let total = layer - taxValue
        totalTaxes += taxValue
        outputDivEl.innerHTML += taxEl(
            indx,
            layer,
            taxPercent*100 + "%",
            taxValue,
            total
        )
	}
    outputDivEl.innerHTML += taxEl(
        "Total",
        incomeValue,
        "#",
        totalTaxes,
        incomeValue=totalTaxes
    )
}
