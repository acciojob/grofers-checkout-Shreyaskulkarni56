const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach((price) => {
        total += parseFloat(price.textContent) || 0;
    });

    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.textContent = total;

    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);