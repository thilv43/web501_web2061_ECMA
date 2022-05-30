import Header from "@/components/Header";
import Banner from "@/components/Banner";
import NewListProducts from "@/components/NewListProducts";
import Footer from "@/components/Footer";

const HomePages = {
    render() {
        return /* html */`
        <div>
                ${Header.render()}
            <div>
                ${Banner.render()}
            </div>
            <div>
                ${NewListProducts.render()}
            </div>
            <div>${Footer.render()}</div>
        </div>
        
    `;
    },
};

export default HomePages;