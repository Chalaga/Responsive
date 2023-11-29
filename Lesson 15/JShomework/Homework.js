const data = [
    {
        name: 'gio',
        weigh: '80 kg',
        height: '180 cm',
        Age: '22 years,'
        // gender: 'male',
    },

    {
        name: 'lasha',
        weigh: '60 kg',
        height: '171 cm',
        Age: '25 years',
        // gender: 'female',
    },

    {
        name: "ana",
        weigh: "55 kg",
        height: "161 cm",
        Age: "23 years",
        // gender: "female",
    },

    {
        name: "mari",
        weigh: "70 kg",
        height: "175 cm",
        Age: "20 years",
        // gender: "female",
    },

    {
        name: 'nika',
        weigh: "100 kg",
        height: "193 cm",
        Age: "20 years",
        // gender: 'Male',
    },

]
console.log(data);


for (let i = 0; i < data.length; i++) {
        console.log(data [i]);    

    for (let j = 0; j < data.length; j++) {
        const element = data[j];
        console.log(data[[i]].Age[j] );
    }
}


// const numbers = [10,20,30,40,50,60,70,80,90,100]
// for (let i = 0; 1 < numbers.length; i++) {
//     const numbers = numbers[i];
//     console.log(numbers[i]);
// }