import Header from "@/components/Header";
import NewListProducts from "@/components/NewListProducts";
import Footer from "@/components/Footer";

const ProductPages = {
    async render() {
        return /* html */`
        <div>${Header.render()}</div>
        <h1>Home Pages</h1>
        <div>${await NewListProducts.render()}</div>
        <div>${Footer.render()}</div>
        `;
    },
};
export default ProductPages;