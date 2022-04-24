//code snippet
async componentDidMount()
{
         JSON = [{ "prodName": "Iphone 11 Pro", "price": "RM2399.00", "Location": "Selangor" }, { "prodName": "Iphone 11 Pro", "price": "RM2399.00", "Location": "Selangor" }];
       //var space = Array(40).fill('\xa0').join('');

        //extract all keys 
        var keys = [];
        var cols = [];
        for (var key in JSON[0]) {
            keys.push(key);
            var colItem = <th>{key}</th>;
            cols.push(colItem);
        }

        var rows = [];
        for (var row in JSON) {
            //access row
            //each row has N dynamic keys

            var rowItems = [];
            for (var key in JSON[row]) {
                //access key
                //each key has a value
                console.log(key);
                console.log(JSON[row][key]);
                var td = JSON[row][key];
                var tdkey = JSON[row][key];
                console.log(typeof td);
                if (td!= null && td != undefined)
                {
                    console.log(td);
                    if (td.toString().startsWith("http://") || td.toString().startsWith("https://"))
                    {
                        td = <a href={td} target="_blank">{decodeURIComponent(td).toString().substring(0,35)}</a>;
                        tdkey = td;
                    }
                    else
                    {
                        td = td;
                        tdkey = tdkey;
                    }
                }
                var rowItem = <td key = {tdkey}>{td}</td>;
                rowItems.push(rowItem);
            }

            var rowData = <tr key = {row}>{rowItems}</tr>;
            rows.push(rowData);
        }

        this.setState({colHeaders: cols, rowData: rows});
}
