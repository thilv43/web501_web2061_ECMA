import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@/data";

const ProductsDetail = {
    render(id) {
        const product = data.find((item) => item.id === id);
        if (!product) return "<div>Not  found</div>";
        return /* html */`
        <div class="">
            ${Header.render()}
            ${Banner.render()}
            <div class="row mt-4">
                <div class="col my-4">
                    <div class="card" style="width: 18rem;">
                    <img src=${product.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.desc}<p>
                            <a href="/tableProducts" class="btn btn-primary">Add to card</a>
                        </div>
                    </div>
                </div>
            </div>
            ${Footer.render()}
        </div>
        `;
    },
};

export default ProductsDetail;