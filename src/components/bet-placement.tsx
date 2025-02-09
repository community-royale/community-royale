"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoinsIcon as CoinIcon, DollarSign } from "lucide-react";
import Image from "next/image";

export function BetPlacement() {
  const [betAmount, setBetAmount] = useState("");
  const [selectedTeam] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");

  const handlePlaceBet = () => {
    // Here you would handle the bet placement logic
    console.log(
      `Placed bet of $${betAmount} on ${selectedTeam} using ${selectedCrypto}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-black/50 backdrop-blur-md rounded-lg overflow-hidden border border-purple-500/20 p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Place Your Bet</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="betAmount"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Bet Amount
          </label>
          <div className="relative">
            <DollarSign
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              id="betAmount"
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              className="pl-10 bg-gray-800 text-white border-purple-500/50 focus:border-purple-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="cryptoSelect"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Select Cryptocurrency
          </label>
          <Select
            value={selectedCrypto}
            onValueChange={(value) => setSelectedCrypto(value)}
          >
            <SelectTrigger className="bg-gray-800 text-white border-purple-500/50 focus:border-purple-500">
              <SelectValue placeholder="Select a cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTC">
                <div className="flex items-center">
                  <Image
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040"
                    alt="Bitcoin"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Bitcoin (BTC)
                </div>
              </SelectItem>
              <SelectItem value="ETH">
                <div className="flex items-center">
                  <Image
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040"
                    alt="Ethereum"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Ethereum (ETH)
                </div>
              </SelectItem>
              <SelectItem value="XRP">
                <div className="flex items-center">
                  <Image
                    src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=040"
                    alt="Ripple"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Ripple (XRP)
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handlePlaceBet}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          disabled={!betAmount || !selectedTeam || !selectedCrypto}
        >
          <CoinIcon className="mr-2 h-4 w-4" />
          Place Bet
        </Button>
      </div>
    </motion.div>
  );
}
