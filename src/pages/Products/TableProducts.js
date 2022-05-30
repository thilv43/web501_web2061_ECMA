import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@/data";

const TableProducts = {
    render() {
        return /* html */`
            <div>${Header.render()}</div>
            <div>${Banner.render()}</div>
            <div>TableProducts</div>
            <div class="news">   
                <table class="table table-bordered">
                    <thead>
                        <tr class="text-center">
                            <th>STT</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((item) => /* html */`
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.title}</td>
                            <td class="text-center">
                                <img  src="${item.img}" alt="" width="50%"/>
                            </td>
                            <td>${item.desc}</td>
                            <td>
                            <button type="button" class="btn btn-outline-success">Success</button>
                            <button type="button" class="btn btn-outline-warning">Warning</button>
                            </td>
                        </tr>
                        `).join("")}
                    
                    </tbody>
                </table>
            </div>
            <div>${Footer.render()}</div>
        `;
    },
};

export default TableProducts;