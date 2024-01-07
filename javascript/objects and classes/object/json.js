
// const jsonString = '{\"userId\":1,\"id\":1,\"title\":\"suntautfacererepellatprovidentoccaecatiexcepturioptioreprehenderit\",\"body\":\"quiaetsuscipit\\nsuscipitrecusandaeconsequunturexpeditaetcum\\nreprehenderitmolestiaeututquastotam\\nnostrumrerumestautemsuntremevenietarchitecto\"}';

const jsonString = '{"name": "Shivam", "age": "22"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

const backtoString = JSON.stringify(jsonObject);

console.log(backtoString);
