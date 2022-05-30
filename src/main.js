import Navigo from "navigo";
import HomePages from "@/pages/HomePages";
import ProductPages from "@/pages/ProductPages";
import ProductDetail from "@/pages/ProductsDetail";
import TableProducts from "./pages/Products/TableProducts";

const router = new Navigo("/");
document.addEventListener("DOMContentLoaded", () => {
    async function print(page, id) {
        const app = document.getElementById("app");
        if (app) {
            app.innerHTML = await page.render(id);
        }
        if (app.afterRender) page.afterRender();
    }
    router.on({
        "/": () => print(HomePages),
        "/products": () => print(ProductPages),
        "/products/:id": (data) => {
            console.log("data", data);
            const id = +data.data.id;
            print(ProductDetail, id);
        },
        "/tableProducts": () => print(TableProducts),
    });
    router.resolve();
});