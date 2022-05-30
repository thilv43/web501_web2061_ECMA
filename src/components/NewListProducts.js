const NewListProducts = {
    async render() {
        const data = await (await fetch("http://localhost:3001/products")).json();
        return /* html */`
    <div class="container">
        <div class="row mt-4">
                ${data.map((item) => /* html */`
                <div class="col my-4">
                <div class="card" style="width: 18rem;">
                <img src=${item.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.desc}<p>
                        <a href="/products/${item.id}" class="btn btn-primary">Submit</a>
                    </div>
                    </div>
                </div>
                `).join("")}
        </div>
    </div>
        `;
    },
};

export default NewListProducts;