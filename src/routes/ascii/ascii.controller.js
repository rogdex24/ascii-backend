// const { getImagefromText, getImageFromFile } = require("../../models/planets.model");
// Logic of the app in models directory

async function httpGetImageFromText(req, res) {
    const keyword = req.params.text;
    console.log(keyword + " animated")

    return res.status(200).json({word: keyword});
}

async function httpGetImageFromFile(req, res) {

    return res.status(200).json({});
}

module.exports = {
    httpGetImageFromText,
    httpGetImageFromFile,
};