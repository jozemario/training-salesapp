import readXlsxFile from 'read-excel-file';

export const getProductsXLSX = () =>
    new Promise(function (resolve, reject) {
        fetch('/public/CABYS.xlsx')
            .then((response) => response.blob())
            .then((blob) => readXlsxFile(blob))
            .then((rows) => {
                // `rows` is an array of rows
                // each row being an array of cells.
                //console.log('getProductsXLSX:', rows);
                resolve(rows);
            })
            .catch((err) => {
                console.log('Error: ', err);
                reject(err.message);
            });
    });
export const getProducts = async (id) => {
    console.log('getProducts:', id);
    return { status: 200, isOk: true, data: 'data' };
};
