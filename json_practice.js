const jsondata = 
{
    "ecommerce_platform": {
      "products": [
        {
          "product_id": "P001",
          "name": "Smartphone XYZ",
          "category": "Electronics",
          "price": 799.99,
          "stock": 120,
          "attributes": {
            "brand": "BrandA",
            "model": "XYZ",
            "color": "Black",
            "features": ["5G", "128GB Storage", "6GB RAM"]
          }
        },
        {
          "product_id": "P002",
          "name": "Laptop ABC",
          "category": "Computers",
          "price": 1299.99,
          "stock": 50,
          "attributes": {
            "brand": "BrandB",
            "model": "ABC",
            "color": "Silver",
            "features": ["16GB RAM", "512GB SSD", "Intel i7"]
          }
        }
        // ... More products
      ],
      "customers": [
        {
          "customer_id": "C001",
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "address": {
            "street": "123 Maple Street",
            "city": "Springfield",
            "state": "IL",
            "zip": "62701"
          },
          "purchase_history": [
            {
              "order_id": "O1001",
              "product_id": "P001",
              "purchase_date": "2023-01-15",
              "quantity": 1,
              "total_price": 799.99
            }
          ]
        },
        {
          "customer_id": "C002",
          "name": "Bob Smith",
          "email": "bob.smith@example.com",
          "address": {
            "street": "456 Oak Avenue",
            "city": "Metropolis",
            "state": "NY",
            "zip": "10001"
          },
          "purchase_history": [
            {
              "order_id": "O1002",
              "product_id": "P002",
              "purchase_date": "2023-02-20",
              "quantity": 1,
              "total_price": 1299.99
            }
          ]
        }
      ],
      "orders": [
        {
          "order_id": "O1001",
          "customer_id": "C001",
          "order_date": "2023-01-15",
          "status": "Delivered",
          "items": [
            {
              "product_id": "P001",
              "quantity": 1,
              "price": 799.99
            }
          ]
        },
        {
          "order_id": "O1002",
          "customer_id": "C002",
          "order_date": "2023-02-20",
          "status": "Delivered",
          "items": [
            {
              "product_id": "P002",
              "quantity": 1,
              "price": 1299.99
            },
            {
                "product_id": "P001",
                "quantity": 3,
                "price": 1299.99
              }
          ]
        }
      ],
      "reviews": [
        {
          "review_id": "R001",
          "product_id": "P001",
          "customer_id": "C001",
          "rating": 4,
          "comment": "Great smartphone with excellent features."
        },
        {
          "review_id": "R002",
          "product_id": "P002",
          "customer_id": "C002",
          "rating": 5,
          "comment": "Amazing laptop, very fast and reliable."
        }
      ]
    }
}

const data = jsondata.ecommerce_platform

function getRecentCustomer(data){
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
    const result = []
    for (let i = 0; i < data.length; i++){
        if (data[i].purchase_history.purchase_date > sixMonthsAgo){
            result.push(data[i])
        }
    }
    return result;
}

function updateStock(data,order_id){
    const orderData = data.orders;
    const productData = data.products;
    const product_quantity = []
    
    for (let i = 0; i < orderData.length; i++){
        if (orderData[i].order_id === order_id){
            for (let j = 0; j < orderData[i].items.length;j++){
                product_quantity.push([orderData[i].items[j].product_id, orderData[i].items[j].quantity]);
            }
        }
    }
    return product_quantity;
}

console.log(updateStock(data,"O1002"));
  