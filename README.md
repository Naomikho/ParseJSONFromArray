# ParseJSONFromJSArray
Dynamically parse JSON stored in a JavaScript array.

In what case will I use this code?
This code can be used if you need to parse JSON that is returned in the form of an array. 
For example:
JSON = [{ "prodName": "Iphone 11 Pro", "price": "RM2399.00", "Location": "Selangor" }, { "prodName": "Iphone 11 Pro", "price": "RM2399.00", "Location": "Selangor" }];

When I had to deal with this kind of data in my final year employer project, I went through a lot of trouble because I didn't know that what type of data the server actually sent me, because my teammate told me that he would send JSON. However, this is actually a JavaScript array and not JSON(only the array elements contain JSON), it is impossible to use JSON.parse() to parse the data. 
