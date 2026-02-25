// app/components/products/StockLabel.js
const StockLabel = ({ stock }) => {
    if (stock > 10) {
        return <div className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full inline-block">En Stock</div>;
    }
    if (stock > 0) {
        return <div className="text-sm font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full inline-block">Poco Stock ({stock} u.)</div>;
    }
    return <div className="text-sm font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full inline-block">Agotado</div>;
};

export default StockLabel;
