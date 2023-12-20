import productsData from "@/data/productsData";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            return res.status(200).json({ status: "success", productsData });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
