import "./styles.css";

const data = [
  { keyOne: "a", keyTwo: "1", data: "01" },
  { keyOne: "a", keyTwo: "1", data: "02" },
  { keyOne: "a", keyTwo: "2", data: "03" },
  { keyOne: "b", keyTwo: "1", data: "04" },
  { keyOne: "b", keyTwo: "2", data: "05" },
  { keyOne: "b", keyTwo: "2", data: "06" },
  { keyOne: "c", keyTwo: "1", data: "07" }
];

const solution = (data) => {
  const res = {};
  data.map((item) => {
    if (res[`${item.keyOne}${item.keyTwo}`]) {
      res[`${item.keyOne}${item.keyTwo}`].push(item);
    } else {
      res[`${item.keyOne}${item.keyTwo}`] = [item];
    }
    return true;
  });

  return res;
};

const result = solution(data);

// Hot to iterate items in the result object.
Object.keys(result).map((item) => {
  console.log(`${item}: ${JSON.stringify(result[item])}`);
  return true;
});

document.getElementById("app").innerHTML = `
<h1>group array by two keys</h1>
<h2>test</h2>
<h2>data</h2>
<pre>
data = [
  { keyOne: "a", keyTwo: "1", data: "01" },
  { keyOne: "a", keyTwo: "1", data: "02" },
  { keyOne: "a", keyTwo: "2", data: "03" },
  { keyOne: "b", keyTwo: "1", data: "04" },
  { keyOne: "b", keyTwo: "2", data: "05" },
  { keyOne: "b", keyTwo: "2", data: "06" },
  { keyOne: "c", keyTwo: "1", data: "07" },
];
</pre>

<h2>expectedResult</h2>
<pre>
res = {
  a1: [
    { keyOne: "a", keyTwo: "1", data: "01" },
    { keyOne: "a", keyTwo: "1", data: "02" },
  ],
  a2: [
    { keyOne: "a", keyTwo: "2", data: "03" }
  ],
  b1: [
    { keyOne: "b", keyTwo: "1", data: "04" },
  ],
  b2: [
    { keyOne: "b", keyTwo: "2", data: "05" },
    { keyOne: "b", keyTwo: "2", data: "06" }
  ],
  c1: [
    { keyOne: "c", keyTwo: "1", data: "07" }
  ],
};
</pre>
`;
