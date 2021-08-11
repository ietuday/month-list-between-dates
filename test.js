const d1 = new Date('2021-02-01T09:00:00')
const d2 = new Date('2021-07-29T09:00:00')
const months = {
	0: "JAN",
	1: "FEB",
	2: "MAR",
	3: "APR",
	4: "MAY",
	5: "JUN",
	6: "JULY",
	7: "AUG",
	8: "SEP",
	9: "OCT",
	10: "NOV",
	11: "DEC",

}
const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);

const monthRange = range(d1.getMonth(),d2.getMonth() )

let monthlist = monthRange.map((x) => months[x])


console.log(monthlist)
