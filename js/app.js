//-----------------Loaded phones data---------------------
const loadPhoneData = () => {
    const inputField = document.getElementById('input-field');
    const inputText = (inputField.value).toLowerCase();
    inputField.value = '';
    const error = document.getElementById('error')
    error.innerText = ''
    if (inputText == "") {
        error.innerText = 'please insert a name to see your favorite phone';
    }
    else if (inputText >= 0) {
        error.innerText = 'You can not input any number Please insert brand name that you want';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}
        `;
        fetch(url)
            .then((Response) => Response.json())
            .then(data => displayPhones(data.data.slice(0, 20)));
    };
};
//-------------------Display Phone-----------------------
const displayPhones = (phones) => {
    const parent = document.getElementById('parent-div');
    parent.innerHTML = '';
    if (phones.length == 0) {
        error.innerText = 'Can not found any phone please insert a brand name that you want';
    }
    else {
        for (const phone of phones) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${phone.image}" class="card-img-top w-75 mx-auto" alt="Image is not found">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${phone.phone_name}</h5>
                        <h6 class="card-text">Brand: ${phone.brand}</h6>
                        <div class="d-flex justify-content-around">
                            <button class="btn btn-outline-info fw-bold" onclick="OthersInfo('${phone.slug}')">Others info</button>
                            <button class="btn btn-outline-info fw-bold" onclick="phoneDetails('${phone.slug}')">Phone details</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            parent.appendChild(div);
        };
    };
};
