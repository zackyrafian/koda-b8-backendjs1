
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {(){}} next 
 */
function authMiddlewware(req, res, next) { 
  if (req.header("Authorization") != "hello") { 
    res.status(401).json({ 
      "success": false, 
      "message": "401"
    })
  }
  next();
}

export default authMiddlewware