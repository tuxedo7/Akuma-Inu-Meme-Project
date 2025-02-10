import { ethers } from "ethers";
import tokenAbi from "../app/abis/tokenAbi.json";

const providerUrl = "https://base-rpc.publicnode.com" as string;
const contractAddress = "0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6" as string;

// TypeScript-safe function to fetch total supply
export const getTotalSupply = async (): Promise<string | null> => {
  try {
    if (!providerUrl || !contractAddress) {
      throw new Error("Missing environment variables for provider or contract");
    }

    // Create provider and contract instance
    const provider = new ethers.JsonRpcProvider(providerUrl);

    // Define contract with ABI and provider
    const contract = new ethers.Contract(contractAddress, tokenAbi, provider);

    // Fetch the total supply and decimals
    const totalSupply = await contract.totalSupply();
    const decimals = await contract.decimals();

    return ethers.formatUnits(totalSupply, decimals);
  } catch (error) {
    console.error("Error fetching total supply:", error);
    return null;
  }
};