module.exports = async function (context, req, data) {
    context.bindings.outputDocument = data[0];
    context.bindings.outputDocument.count += 1;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data[0]
    };
}