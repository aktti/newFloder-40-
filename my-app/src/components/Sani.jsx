import React, { useState } from "react";

function FetchApiExample() {
const [inputValue,setInputValue] = useState("");
const [appiData, setApiData] = useState(null);

const handleInputChange = (event) =>{
setInputValue(event.target.value)
};

const fetchAppiData = async () =>{
try {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`);
if(!response.ok) {
throw new Error("Failed To Fetch Data");
}
const data = await response.json();
setApiData(data);
} catch (error) {
console.error("Error:",error);
setApiData(null);
}
};

return(
<div style={{padding:"20px"}}>
<h2>Fetch Api Example</h2>
<div>
<input type="text"
placeholder="Enter Id To Fetch"
value={inputValue}
onChange={handleInputChange}
style={{marginRight:"10px",padding:"5px"}}
/>
<button onClick={fetchAppiData} style={{padding:"5px 10px"}}>
Fetch Api Data
</button>
</div>
<div style={{ marginTop: "20px" }}>
{appiData ? (
<div>
<h3>Data:</h3>
<pre>{JSON.stringify(appiData, null, 2)}</pre>
</div>
) : (
<p>No Data Fetched Yet</p>
)}
</div>
</div>
)

}
export default FetchApiExample