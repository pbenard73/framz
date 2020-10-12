export default (res, message, status = 200) => res.json.status(status)({valid:false, message})
