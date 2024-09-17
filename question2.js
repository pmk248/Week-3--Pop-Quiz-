const F_NAME = document.getElementById("lname");
const L_NAME = document.getElementById("fname");


showName();
async function showName() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        let fname = data.results[0].name.first;
        let lname = data.results[0].name.last;

        F_NAME.innerText = fname;
        L_NAME.innerText = lname;
    }
}