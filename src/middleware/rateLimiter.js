import ratelimit from "../config/upstash.js";

const rateLimit = async (req, res, next) => {
    try {
        // ✅ UPDATED: use user IP instead of static key
        const identifier = req.ip;

        const { success } = await ratelimit.limit(identifier);

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later.",
            });
        }
        next();
    } catch (error) {
        console.log("Rate Limit error:", error);
        next(error);
        // res.status(500).json({ message: "Internal Server Error" });
        // next(error);
        // res.status(500).json({ message: "Internal Server Error" });
    }
};

export default rateLimit;

// ====================================================================

// version 2
// import ratelimit from "../config/upstash.js";

// const rateLimit = async (req, res, next) => {
//     try {

//         const identifier = req.ip;   // <-- added

//         const { success } = await ratelimit.limit(identifier);   // <-- changed

//         if (!success) {
//             return res.status(429).json({
//                 message: "Too many requests, please try again later."
//             });
//         }

//         next();

//     } catch (error) {
//         console.error("Error in rateLimit middleware:", error.message);
//         next(error);
//     }
// };

// export default rateLimit;
