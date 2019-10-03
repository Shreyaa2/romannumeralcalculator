import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (ints) => {
        /* Implement me! */
        /* checks if input is just zero*/
        if (ints == 0) return "nulla";
        /* limit to the length of input */
        if (ints.length > 15) return "input limit reached";
        var sum = 0;
        /* Sums all the elemets in the array*/
        for ( let i =0; i < ints.length; i++ ) { 
            sum += ints[i];
        }
        /*converts sum to its roman equivalent  */
        let roman = converttoroman(sum);
        return roman;
    }

    const converttoroman = (n) => {
        var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    var result = "";
    /* maps all the roman to deciman numbers*/
        for (let i = 0; i<= decimal.length; i++) {
            while (n%decimal[i] < n) {
                result += roman[i];
                n -= decimal[i];
            }
        }
        return result;
            };

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}