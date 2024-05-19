import React, { useEffect, useState } from "react";
import axios from "axios";
import { global, data } from "./../assets/db.js";
import PercentChange from "./PercentChange.js";
import TableFilters from "./TableFilters.js";

const HeaderInfos = () => {
  const [headerGlobalData, setHeaderGlobalData] = useState([]);
  //   const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderGlobalData(res.data.data));
    // setHeaderGlobalData(global[0]);
    // setHeaderData(data);
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Watch Tower
          </h1>
        </li>
        <li>
          Crypto-monnaies :{" "}
          {headerGlobalData.active_cryptocurrencies &&
            headerGlobalData.active_cryptocurrencies.toLocaleString()}
          {/* {headerGlobalData.active_cryptocurrencies &&
            headerGlobalData.active_cryptocurrencies.toLocaleString()} */}
        </li>
        <li>
          Marchés : {headerGlobalData.markets && headerGlobalData.markets}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={headerGlobalData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominance :{" "}
          {headerGlobalData.market_cap_percentage &&
            headerGlobalData.market_cap_percentage.btc.toFixed(1) + "%"}
        </li>
        <li>
          ETH dominance :{" "}
          {headerGlobalData.market_cap_percentage &&
            headerGlobalData.market_cap_percentage.eth.toFixed(1) + "%"}
        </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
