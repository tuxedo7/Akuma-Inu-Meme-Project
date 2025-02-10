import axios from "axios";

export const getTokenMarketData = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets`,
      {
        headers: {
          // "Authorization": "Bearer your-token",
          // "Content-Type": "application/json",
          // "x-cg-pro-api-key": "CG-Ty11KAdThqiPxgzvAnqrcPXg",
        },
        params: {
          vs_currency: "usd",
          ids: "akuma-inu", // or "contract_address=<your CA>"
        },
      }
    );

    if (response.data && response.data.length > 0) {
      const { total_supply, current_price, market_cap, total_volume } = response.data[0];
      return { total_supply, current_price, market_cap, total_volume };
    }
    return null;
  } catch (error) {
    console.error("Error fetching market data:", error);
    return null;
  }
};
