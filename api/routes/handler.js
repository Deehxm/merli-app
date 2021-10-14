const api = require("../provider/api");
const express = require("express");
const router = express.Router();
const url = require("url");

router.get("/", (req, res) => {
    res.end("Server running.");
});

router.get("/api/items", async (req, res) => {
    const { query } = req;
    try {
        const { data } = await api.get("sites/MLA/search", { params: query });
        const currencies = await api.get("currencies");
        const category = data.filters.find(el => el.id === "category")?.values[0];
    
        const items = data.results.map((el) => {
            const currency = currencies.data.find(cur => cur.id === el.currency_id);
            const amount = Math.trunc(el.price);
            const decimals = Number((el.price % 1).toFixed(currency.decimal_places).substring(2));
            return {
                id: el.id,
                title: el.title,
                price: {
                    currency: currency.symbol,
                    amount: amount,
                    decimals: decimals
                },
                picture: el.thumbnail,
                condition: el.condition,
                free_shipping: el.shipping.free_shipping,
                state: el.address.state_name
            }
        });

        const result = {
            author: {
                name: "Andressa",
                lastname: "Almeida"
            },
            categories: category ? Object.values(category.path_from_root).map(el => el.name): undefined,
            items: items
        }
        return res.send(result);
    } catch (error) {
        res.send({ error: error.message });
    }
});

router.get("/api/items/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const item = await api.get(`items/${id}`);
        const description = await api.get(`items/${id}/description`);
        const currency = await api.get(`currencies/${item.data.currency_id}`);
        const category = await api.get(`categories/${item.data.category_id}`);
        const amount = Math.trunc(item.data.price);
        const decimals = Number((item.data.price % 1).toFixed(currency.data.decimal_places).substring(2));

        const result = {
            author: {
                name: "Andressa",
                lastname: "Almeida"
            },
            item: {
                id: item.data.id,
                title: item.data.title,
                price: {
                    currency: currency.data.symbol,
                    amount: amount,
                    decimals: decimals,
                },
                picture: item.data.pictures[0].url,
                condition: item.data.condition,
                free_shipping: item.data.shipping.free_shipping,
                sold_quantity: item.data.sold_quantity,
                description: description.data.plain_text,
                categories: Object.values(category.data?.path_from_root).map(el => el.name)
            }
        }
        return res.send(result);
    } catch (error) {
        res.send({ error: error.message });
    }
});

module.exports = router;