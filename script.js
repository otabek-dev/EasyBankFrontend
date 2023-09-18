const xValues = ["9-12-2023", "9-12-2023", "9-12-2023", 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
const yValuesNext = [71, 83, 18, 29, 94, 91, 10, 11, 14, 14, 15];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
            label: "test",
            backgroundColor: "rgba(0,0,255,0.3)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
            },
            {
                label: "morph",
                backgroundColor: "rgba(200,0,255,0.3)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValuesNext
            }]
    },
    options: {

    }
});

const xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues2 = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myBar", {
    type: "bar",
    data: {
        labels: xValues2,
        datasets: [{
            backgroundColor: barColors,
            data: yValues2
        }]
    },
    options: {}
});