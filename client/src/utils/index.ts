import { readContract as readContractData } from "@wagmi/core";
import { Factory, SimpleCollectible } from "../../constants";
import { error } from "console";

export const readFactoryContract = async (
  functionName: string,
  args: [] = [],
) => {
  const data = await readContractData({
    address: Factory.address,
    abi: Factory.abi,
    functionName,
    args,
    chainId: 10200,
  });

  return data;
};

export const readSimpleCollectibleContract = async (
  address: `0x${string}`,
  functionName: string,
  args: any[] = [],
) => {
  try {
    console.log(address, functionName, args, "kkk");
    const data = await readContractData({
      address,
      abi: SimpleCollectible.abi,
      functionName,
      args,
      chainId: 10200,
    });
    console.log(data, "lll");

    return functionName === "name" ? String(data).split(",")[0] : data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getNFTDetails = async () => {};
