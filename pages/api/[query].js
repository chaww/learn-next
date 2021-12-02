export default (req, res) => {
    const { query } = req.query;
    res.status(200).json({
        name: '[query]',
        query: query,
    })
}