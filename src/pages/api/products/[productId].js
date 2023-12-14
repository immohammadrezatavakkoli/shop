import productsData from "@/data/productsData";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;

    try {
        const product = productsData.find((p) => p.id === parseInt(productId));

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json({ status: "success", product });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
