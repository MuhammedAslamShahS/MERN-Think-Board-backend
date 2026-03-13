import ratelimit from "../config/upstash.js";

const rateLimit = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(userid);
        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." 

            });
        }
        next();
    } catch (error) {
      console.error("Error in rateLimit middleware:", error.message);
      next(error);
      // res.status(500).json({ message: "Internal Server Error" });
      // next(error);
      // res.status(500).json({ message: "Internal Server Error" });
      
    }
};

export default rateLimit;
