const api = require("../provider/api");
const express = require('express');
const router = express.Router();
const url = require('url');

router.get('/', (req, res) => {
    res.end('Server running.');
});

router.get('/api/items', async (req, res) => {
    const { query } = req;
    try {
        const { data } = await api.get("sites/MLA/search", { params: query });
        const currencies = await api.get("currencies");
        const categoryIds = [];

        const items = data.results.map((el) => {
            const currency = currencies.data.find(cur => cur.id === el.currency_id);
            const amount = Math.trunc(el.price);
            const decimals = Number((el.price % 1).toFixed(currency.decimal_places).substring(2));
            categoryIds.push(el.category_id);
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
                free_shipping: el.shipping.free_shipping
            }
        })

        const result = {
            author: {
                name: "N/A",
                lastname: "N/A"
            },
            categories: [...new Set(categoryIds)],
            items: items
        }
        return res.send(result);
    } catch (error) {
        res.send({ error: error.message });
    }
});

router.get('/api/items/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await api.get(`items/${id}`);
        const description = await api.get(`items/${id}/description`);
        const seller = await api.get(`users/${item.data.seller_id}`);
        const currency = await api.get(`currencies/${item.data.currency_id}`);
        const amount = Math.trunc(item.data.price);
        const decimals = Number((item.data.price % 1).toFixed(currency.data.decimal_places).substring(2));

        const result = {
            author: {
                name: seller.data.nickname,
                lastname: "N/A"
            },
            item: {
                id: item.data.id,
                title: item.data.title,
                price: {
                    currency: currency.data.symbol,
                    amount: amount,
                    decimals: decimals,
                },
                picture: item.data.thumbnail,
                condition: item.data.condition,
                free_shipping: item.data.shipping.free_shipping,
                sold_quantity: item.data.sold_quantity,
                description: description.data.plain_text
            }
        }
        return res.send(result);
    } catch (error) {
        res.send({ error: error.message });
    }
});

module.exports = router;