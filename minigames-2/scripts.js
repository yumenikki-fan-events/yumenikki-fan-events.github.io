/** @type {NodeListOf<HTMLTableCellElement>} */
const tds = document.querySelectorAll('.minigames tbody tr:has(td:not(:empty)) td:nth-of-type(2)');
for (const td of tds) {
	if (td.scrollWidth > td.clientWidth) {
		td.style.transform = `scaleX(${td.clientWidth / td.scrollWidth})`;
	}
}
