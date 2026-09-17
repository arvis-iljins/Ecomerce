var db = db.getSiblingDB("OrdersDatabase");

db.orders.insertMany([
    {
        "_id": "4d9b6010-48e6-4a0e-bd4e-461c85c32c1d",
        "OrderID": "4d9b6010-48e6-4a0e-bd4e-461c85c32c1d",
        "UserID": "c32f8b42-60e6-4c02-90a7-9143ab37189f",
        "OrderDate": "2050-10-20T08:00:00",
        "TotalBill": 2799.98,
        "OrderItems": [
            { "ProductID": 1, "ProductName": "Laptop Pro",      "Category": "Electronics", "UnitPrice": 1299.99, "Quantity": 1, "TotalPrice": 1299.99 },
            { "ProductID": 2, "ProductName": "Gaming Console",  "Category": "Electronics", "UnitPrice": 1499.99, "Quantity": 1, "TotalPrice": 1499.99 }
        ]
    },
    {
        "_id": "62c2fb9c-b36e-497e-b0b7-f07c6c3c22b2",
        "OrderID": "62c2fb9c-b36e-497e-b0b7-f07c6c3c22b2",
        "UserID": "8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5",
        "OrderDate": "2050-10-21T09:00:00",
        "TotalBill": 969.95,
        "OrderItems": [
            { "ProductID": 3, "ProductName": "Wireless Headphones", "Category": "Electronics", "UnitPrice": 249.99, "Quantity": 1, "TotalPrice": 249.99 },
            { "ProductID": 4, "ProductName": "Mechanical Keyboard", "Category": "Accessories", "UnitPrice": 179.99, "Quantity": 4, "TotalPrice": 719.96 }
        ]
    },
    {
        "_id": "e3f6d6b7-bc84-48e3-8d22-961e1e084f0e",
        "OrderID": "e3f6d6b7-bc84-48e3-8d22-961e1e084f0e",
        "UserID": "8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5",
        "OrderDate": "2050-10-22T10:00:00",
        "TotalBill": 5499.88,
        "OrderItems": [
            { "ProductID": 3, "ProductName": "Wireless Headphones", "Category": "Electronics", "UnitPrice": 249.99, "Quantity": 10, "TotalPrice": 2499.90 },
            { "ProductID": 2, "ProductName": "Gaming Console",      "Category": "Electronics", "UnitPrice": 1499.99, "Quantity": 2, "TotalPrice": 2999.98 }
        ]
    },
    {
        "_id": "af168b29-b6c5-45ed-a4f1-19c04f368d1a",
        "OrderID": "af168b29-b6c5-45ed-a4f1-19c04f368d1a",
        "UserID": "8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5",
        "OrderDate": "2050-10-23T11:00:00",
        "TotalBill": 5039.94,
        "OrderItems": [
            { "ProductID": 4, "ProductName": "Mechanical Keyboard", "Category": "Accessories", "UnitPrice": 179.99, "Quantity": 3,  "TotalPrice": 539.97  },
            { "ProductID": 2, "ProductName": "Gaming Console",      "Category": "Electronics", "UnitPrice": 1499.99, "Quantity": 3, "TotalPrice": 4499.97 }
        ]
    },
    {
        "_id": "3a0e5c1a-446e-4e0c-90dc-b87e0576cf36",
        "OrderID": "3a0e5c1a-446e-4e0c-90dc-b87e0576cf36",
        "UserID": "8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5",
        "OrderDate": "2050-10-24T12:00:00",
        "TotalBill": 6679.94,
        "OrderItems": [
            { "ProductID": 1, "ProductName": "Laptop Pro",          "Category": "Electronics", "UnitPrice": 1299.99, "Quantity": 5, "TotalPrice": 6499.95 },
            { "ProductID": 4, "ProductName": "Mechanical Keyboard", "Category": "Accessories", "UnitPrice": 179.99,  "Quantity": 1, "TotalPrice": 179.99  }
        ]
    },
    {
        "_id": "a07e908e-57b1-49f0-b18e-4860b0948cf2",
        "OrderID": "a07e908e-57b1-49f0-b18e-4860b0948cf2",
        "UserID": "8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5",
        "OrderDate": "2050-10-25T13:00:00",
        "TotalBill": 859.96,
        "OrderItems": [
            { "ProductID": 3, "ProductName": "Wireless Headphones", "Category": "Electronics", "UnitPrice": 249.99, "Quantity": 2, "TotalPrice": 499.98 },
            { "ProductID": 4, "ProductName": "Mechanical Keyboard", "Category": "Accessories", "UnitPrice": 179.99, "Quantity": 2, "TotalPrice": 359.98 }
        ]
    },
    {
        "_id": "b8f3fbfc-5648-40f8-bb51-f158b32f77d9",
        "OrderID": "b8f3fbfc-5648-40f8-bb51-f158b32f77d9",
        "UserID": "c32f8b42-60e6-4c02-90a7-9143ab37189f",
        "OrderDate": "2050-10-26T14:00:00",
        "TotalBill": 2849.97,
        "OrderItems": [
            { "ProductID": 1, "ProductName": "Laptop Pro",          "Category": "Electronics", "UnitPrice": 1299.99, "Quantity": 2, "TotalPrice": 2599.98 },
            { "ProductID": 3, "ProductName": "Wireless Headphones", "Category": "Electronics", "UnitPrice": 249.99,  "Quantity": 1, "TotalPrice": 249.99  }
        ]
    },
    {
        "_id": "c6a05e2e-81c0-4a43-80d1-8fd6936318e2",
        "OrderID": "c6a05e2e-81c0-4a43-80d1-8fd6936318e2",
        "UserID": "c32f8b42-60e6-4c02-90a7-9143ab37189f",
        "OrderDate": "2050-10-27T15:00:00",
        "TotalBill": 9499.94,
        "OrderItems": [
            { "ProductID": 5, "ProductName": "4K Monitor",     "Category": "Electronics", "UnitPrice": 1999.99, "Quantity": 1, "TotalPrice": 1999.99 },
            { "ProductID": 2, "ProductName": "Gaming Console", "Category": "Electronics", "UnitPrice": 1499.99, "Quantity": 5, "TotalPrice": 7499.95 }
        ]
    },
    {
        "_id": "d66c9b87-0f4b-482d-b87b-fc5b96b59871",
        "OrderID": "d66c9b87-0f4b-482d-b87b-fc5b96b59871",
        "UserID": "c32f8b42-60e6-4c02-90a7-9143ab37189f",
        "OrderDate": "2050-10-28T16:00:00",
        "TotalBill": 2999.98,
        "OrderItems": [
            { "ProductID": 2, "ProductName": "Gaming Console", "Category": "Electronics", "UnitPrice": 1499.99, "Quantity": 1, "TotalPrice": 1499.99 },
            { "ProductID": 5, "ProductName": "4K Monitor",     "Category": "Electronics", "UnitPrice": 1999.99, "Quantity": 1, "TotalPrice": 1999.99 }
        ]
    },
    {
        "_id": "e2a3ff6b-ba0e-463e-bc07-aa4421317a53",
        "OrderID": "e2a3ff6b-ba0e-463e-bc07-aa4421317a53",
        "UserID": "c32f8b42-60e6-4c02-90a7-9143ab37189f",
        "OrderDate": "2050-10-29T17:00:00",
        "TotalBill": 6679.94,
        "OrderItems": [
            { "ProductID": 5, "ProductName": "4K Monitor",          "Category": "Electronics", "UnitPrice": 1999.99, "Quantity": 3, "TotalPrice": 5999.97 },
            { "ProductID": 6, "ProductName": "USB-C Hub",           "Category": "Accessories", "UnitPrice": 49.99,   "Quantity": 7, "TotalPrice": 349.93  },
            { "ProductID": 4, "ProductName": "Mechanical Keyboard", "Category": "Accessories", "UnitPrice": 179.99,  "Quantity": 1, "TotalPrice": 179.99  }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000011",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000011",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000003",
        "OrderDate": "2050-11-01T09:00:00",
        "TotalBill": 1079.97,
        "OrderItems": [
            { "ProductID": 7,  "ProductName": "Smartphone X",   "Category": "Electronics", "UnitPrice": 899.99, "Quantity": 1, "TotalPrice": 899.99 },
            { "ProductID": 18, "ProductName": "Gaming Mouse",   "Category": "Accessories", "UnitPrice": 79.99,  "Quantity": 1, "TotalPrice": 79.99  },
            { "ProductID": 26, "ProductName": "Mouse Pad XL",   "Category": "Accessories", "UnitPrice": 29.99,  "Quantity": 1, "TotalPrice": 29.99  },
            { "ProductID": 21, "ProductName": "Screen Protector","Category": "Accessories", "UnitPrice": 14.99,  "Quantity": 1, "TotalPrice": 14.99  }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000012",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000012",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000004",
        "OrderDate": "2050-11-02T10:00:00",
        "TotalBill": 1499.97,
        "OrderItems": [
            { "ProductID": 8,  "ProductName": "Tablet Pro",     "Category": "Electronics", "UnitPrice": 649.99, "Quantity": 1, "TotalPrice": 649.99 },
            { "ProductID": 31, "ProductName": "Gaming Chair",   "Category": "Gaming",      "UnitPrice": 299.99, "Quantity": 1, "TotalPrice": 299.99 },
            { "ProductID": 27, "ProductName": "Laptop Stand",   "Category": "Accessories", "UnitPrice": 34.99,  "Quantity": 1, "TotalPrice": 34.99  },
            { "ProductID": 20, "ProductName": "Laptop Bag",     "Category": "Accessories", "UnitPrice": 39.99,  "Quantity": 1, "TotalPrice": 39.99  }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000013",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000013",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000005",
        "OrderDate": "2050-11-03T11:00:00",
        "TotalBill": 1099.97,
        "OrderItems": [
            { "ProductID": 9,  "ProductName": "Smart TV 55\"",  "Category": "Electronics", "UnitPrice": 799.99, "Quantity": 1, "TotalPrice": 799.99 },
            { "ProductID": 41, "ProductName": "WiFi Router AC3000", "Category": "Networking", "UnitPrice": 149.99, "Quantity": 1, "TotalPrice": 149.99 },
            { "ProductID": 44, "ProductName": "Ethernet Cable 10m", "Category": "Networking", "UnitPrice": 9.99, "Quantity": 5, "TotalPrice": 49.95 },
            { "ProductID": 29, "ProductName": "Power Strip 6-outlet", "Category": "Accessories", "UnitPrice": 27.99, "Quantity": 1, "TotalPrice": 27.99 }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000014",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000014",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000006",
        "OrderDate": "2050-11-04T12:00:00",
        "TotalBill": 1149.96,
        "OrderItems": [
            { "ProductID": 13, "ProductName": "Smartwatch",     "Category": "Electronics", "UnitPrice": 299.99, "Quantity": 1, "TotalPrice": 299.99 },
            { "ProductID": 32, "ProductName": "Gaming Headset", "Category": "Gaming",      "UnitPrice": 119.99, "Quantity": 1, "TotalPrice": 119.99 },
            { "ProductID": 33, "ProductName": "Controller Pro", "Category": "Gaming",      "UnitPrice": 69.99,  "Quantity": 2, "TotalPrice": 139.98 },
            { "ProductID": 39, "ProductName": "SSD 1TB",        "Category": "Gaming",      "UnitPrice": 89.99,  "Quantity": 1, "TotalPrice": 89.99  },
            { "ProductID": 40, "ProductName": "RAM 16GB DDR5",  "Category": "Gaming",      "UnitPrice": 79.99,  "Quantity": 6, "TotalPrice": 479.94 }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000015",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000015",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000007",
        "OrderDate": "2050-11-05T13:00:00",
        "TotalBill": 1149.96,
        "OrderItems": [
            { "ProductID": 46, "ProductName": "Ergonomic Chair", "Category": "Office", "UnitPrice": 349.99, "Quantity": 1, "TotalPrice": 349.99 },
            { "ProductID": 47, "ProductName": "Standing Desk",   "Category": "Office", "UnitPrice": 499.99, "Quantity": 1, "TotalPrice": 499.99 },
            { "ProductID": 49, "ProductName": "LED Desk Lamp",   "Category": "Office", "UnitPrice": 39.99,  "Quantity": 2, "TotalPrice": 79.98  },
            { "ProductID": 48, "ProductName": "Desk Organizer",  "Category": "Office", "UnitPrice": 24.99,  "Quantity": 4, "TotalPrice": 99.96  },
            { "ProductID": 50, "ProductName": "Whiteboard",      "Category": "Office", "UnitPrice": 79.99,  "Quantity": 1, "TotalPrice": 79.99  }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000016",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000016",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000008",
        "OrderDate": "2050-11-06T10:00:00",
        "TotalBill": 1219.96,
        "OrderItems": [
            { "ProductID": 14, "ProductName": "VR Headset",      "Category": "Electronics", "UnitPrice": 499.99, "Quantity": 1, "TotalPrice": 499.99 },
            { "ProductID": 37, "ProductName": "Capture Card",    "Category": "Gaming",      "UnitPrice": 159.99, "Quantity": 1, "TotalPrice": 159.99 },
            { "ProductID": 38, "ProductName": "Gaming Router",   "Category": "Gaming",      "UnitPrice": 189.99, "Quantity": 1, "TotalPrice": 189.99 },
            { "ProductID": 34, "ProductName": "Gaming Desk",     "Category": "Gaming",      "UnitPrice": 249.99, "Quantity": 1, "TotalPrice": 249.99 },
            { "ProductID": 35, "ProductName": "RGB LED Strip",   "Category": "Gaming",      "UnitPrice": 19.99,  "Quantity": 4, "TotalPrice": 79.96  },
            { "ProductID": 36, "ProductName": "Gaming Mousepad", "Category": "Gaming",      "UnitPrice": 34.99,  "Quantity": 1, "TotalPrice": 34.99  }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000017",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000017",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000009",
        "OrderDate": "2050-11-07T11:00:00",
        "TotalBill": 899.94,
        "OrderItems": [
            { "ProductID": 41, "ProductName": "WiFi Router AC3000",   "Category": "Networking", "UnitPrice": 149.99, "Quantity": 1, "TotalPrice": 149.99 },
            { "ProductID": 42, "ProductName": "Network Switch 8-port","Category": "Networking", "UnitPrice": 39.99,  "Quantity": 1, "TotalPrice": 39.99  },
            { "ProductID": 43, "ProductName": "Powerline Adapter",    "Category": "Networking", "UnitPrice": 49.99,  "Quantity": 2, "TotalPrice": 99.98  },
            { "ProductID": 45, "ProductName": "Network Rack",         "Category": "Networking", "UnitPrice": 99.99,  "Quantity": 1, "TotalPrice": 99.99  },
            { "ProductID": 44, "ProductName": "Ethernet Cable 10m",   "Category": "Networking", "UnitPrice": 9.99,   "Quantity": 51, "TotalPrice": 509.49 }
        ]
    },
    {
        "_id": "f1a2b3c4-0001-4000-8000-000000000018",
        "OrderID": "f1a2b3c4-0001-4000-8000-000000000018",
        "UserID": "a1b2c3d4-0001-4000-8000-000000000010",
        "OrderDate": "2050-11-08T12:00:00",
        "TotalBill": 2649.95,
        "OrderItems": [
            { "ProductID": 16, "ProductName": "Desktop PC",        "Category": "Electronics", "UnitPrice": 1199.99, "Quantity": 1, "TotalPrice": 1199.99 },
            { "ProductID": 39, "ProductName": "SSD 1TB",           "Category": "Gaming",      "UnitPrice": 89.99,   "Quantity": 2, "TotalPrice": 179.98  },
            { "ProductID": 40, "ProductName": "RAM 16GB DDR5",     "Category": "Gaming",      "UnitPrice": 79.99,   "Quantity": 2, "TotalPrice": 159.98  },
            { "ProductID": 4,  "ProductName": "Mechanical Keyboard","Category": "Accessories", "UnitPrice": 179.99,  "Quantity": 1, "TotalPrice": 179.99  },
            { "ProductID": 18, "ProductName": "Gaming Mouse",      "Category": "Accessories", "UnitPrice": 79.99,   "Quantity": 1, "TotalPrice": 79.99   },
            { "ProductID": 19, "ProductName": "Monitor Stand",     "Category": "Accessories", "UnitPrice": 59.99,   "Quantity": 1, "TotalPrice": 59.99   },
            { "ProductID": 24, "ProductName": "Webcam HD",         "Category": "Accessories", "UnitPrice": 89.99,   "Quantity": 1, "TotalPrice": 89.99   },
            { "ProductID": 23, "ProductName": "Cable Management Kit","Category":"Accessories", "UnitPrice": 24.99,   "Quantity": 4, "TotalPrice": 99.96   }
        ]
    }
]);
